import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailService } from '../../core/services/email.service';
import { EmailJsContactParams } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  /** État du formulaire */
  isLoading = false;
  isSubmitted = false;
  feedbackStatus: 'idle' | 'success' | 'error' = 'idle';
  feedbackMessage = '';

  /** Sujets suggérés pour faciliter la saisie */
  suggestedSubjects: string[] = [
    'Renseignement accessoire auto',
    'Commande & Livraison',
    'Confort & Équipement',
    'Service après-vente / SAV',
    'Partenariat & Devis',
  ];

  /** Coordonnées officielles TOURÉ ACCESSORIES COMPANY (TAC) */
  readonly contactInfo = {
    companyName: 'TOURÉ ACCESSORIES COMPANY (TAC)',
    phone: '+221 77 503 83 97',
    phoneHref: 'tel:+221775038397',
    whatsapp: '+32 466 33 14 12',
    whatsappHref:
      'https://wa.me/32466331412?text=Bonjour%20TOURÉ%20ACCESSORIES%20COMPANY%2C%20je%20souhaite%20des%20informations%20sur%20vos%20produits',
    email: 'toureaccessoriescompany@gmail.com',
    emailHref: 'mailto:toureaccessoriescompany@gmail.com',
    location: 'Pikine, Dakar - Sénégal',
    mapsHref: 'https://maps.google.com/?q=Pikine,+Dakar,+Senegal',
    businessHours: 'Lundi au Samedi : 08h00 - 20h00',
    deliveryZone: 'Livraison express partout à Dakar et dans tout le Sénégal',
    socials: {
      facebook: 'https://www.facebook.com/share/1EUkzELBHD/?mibextid=wwXIfr',
      instagram:
        'https://www.instagram.com/toure_accessories_company?stkn=MzlyN3VwOHdid253&utm_source=qr',
      tiktok:
        'https://www.tiktok.com/@tour.accessories.c?_r=1&_t=ZS-9AMhLVDbXnT',
    },
  };

  /** Formulaire réactif */
  contactForm: FormGroup = this.fb.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        ),
      ],
    ],
    subject: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(3000),
      ],
    ],
    // Champ Honeypot invisible aux utilisateurs humains : anti-robots
    company_website: [''],
  });

  /** Raccourci vers les contrôles du formulaire */
  get f() {
    return this.contactForm.controls;
  }

  /**
   * Vérifie si un contrôle a une erreur et doit afficher le message.
   */
  hasError(controlName: string, errorType?: string): boolean {
    const control = this.contactForm.get(controlName);
    if (!control) return false;

    const isInvalid = control.invalid && (control.touched || this.isSubmitted);
    if (!errorType) return isInvalid;
    return Boolean(isInvalid && control.hasError(errorType));
  }

  /**
   * Remplit rapidement le champ Sujet en cliquant sur un badge suggéré.
   */
  selectSubject(subjectText: string): void {
    this.contactForm.patchValue({ subject: subjectText });
    this.contactForm.get('subject')?.markAsDirty();
  }

  /**
   * Masque l'alerte de statut.
   */
  dismissFeedback(): void {
    this.feedbackStatus = 'idle';
    this.feedbackMessage = '';
  }

  /**
   * Soumet le formulaire et appelle EmailJS via EmailService.
   */
  async onSubmit(): Promise<void> {
    this.isSubmitted = true;
    this.feedbackStatus = 'idle';
    this.feedbackMessage = '';

    // Si le formulaire est invalide, stopper et marquer tous les champs
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.feedbackStatus = 'error';
      this.feedbackMessage =
        'Veuillez corriger les champs en rouge avant de soumettre le formulaire.';
      return;
    }

    // Protection anti-double-clic
    if (this.isLoading) return;

    this.isLoading = true;

    // Préparation des paramètres EmailJS (noms stricts attendus par le template)
    const templateParams: EmailJsContactParams = {
      from_name: this.contactForm.value.fullName?.trim() || '',
      from_email: this.contactForm.value.email?.trim() || '',
      subject: this.contactForm.value.subject?.trim() || '',
      message: this.contactForm.value.message?.trim() || '',
    };

    const honeypot = this.contactForm.value.company_website;

    try {
      const result = await this.emailService.sendContactMessage(
        templateParams,
        honeypot
      );

      if (result.success) {
        this.feedbackStatus = 'success';
        this.feedbackMessage = result.message;

        // Réinitialiser le formulaire après un succès
        this.contactForm.reset();
        this.isSubmitted = false;
      } else {
        this.feedbackStatus = 'error';
        this.feedbackMessage = result.message;
      }
    } catch {
      this.feedbackStatus = 'error';
      this.feedbackMessage =
        'Une anomalie réseau imprévue s’est produite. Veuillez réessayer ou utiliser WhatsApp.';
    } finally {
      this.isLoading = false;
    }
  }
}
