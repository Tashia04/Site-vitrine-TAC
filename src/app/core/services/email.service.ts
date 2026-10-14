import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { EmailJsContactParams, EmailSendResult } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  /** Timestamp de la dernière soumission réussie pour le cooldown anti-spam */
  private lastSubmissionTime = 0;

  /** Délai minimal entre deux envois (15 secondes) */
  private readonly COOLDOWN_MS = 15000;

  /**
   * Envoie le formulaire de contact via EmailJS.
   *
   * @param params Objet contenant from_name, from_email, subject, message
   * @param honeypot Champ leurre anti-robot
   * @returns Résultat typé de l'envoi
   */
  async sendContactMessage(
    params: EmailJsContactParams,
    honeypot?: string
  ): Promise<EmailSendResult> {
    // 1. Protection Anti-Bot (Honeypot) :
    // Si un robot a rempli le champ caché, on bloque immédiatement sans consommer de quota EmailJS.
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[EmailService] Soumission bloquée par la protection Honeypot.');
      return {
        success: false,
        message: 'Comportement suspect détecté. Envoi interrompu.',
      };
    }

    // 2. Protection Anti-Spam / Cooldown :
    // Empêche un visiteur d'inonder la boîte avec des envois frénétiques en chaîne.
    const now = Date.now();
    const elapsed = now - this.lastSubmissionTime;
    if (this.lastSubmissionTime > 0 && elapsed < this.COOLDOWN_MS) {
      const waitSeconds = Math.ceil((this.COOLDOWN_MS - elapsed) / 1000);
      return {
        success: false,
        message: `Veuillez patienter ${waitSeconds} seconde(s) avant de renvoyer un nouveau message.`,
      };
    }

    // 3. Validation des identifiants centralisés
    const { serviceId, templateId, publicKey } = environment.emailjs;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId.includes('VOTRE_') ||
      templateId.includes('VOTRE_') ||
      publicKey.includes('VOTRE_')
    ) {
      console.error(
        '[EmailService] Les identifiants EmailJS ne sont pas configurés dans src/environments/environment.ts.'
      );
      return {
        success: false,
        message:
          'Le service d’envoi n’est pas encore configuré avec vos identifiants EmailJS (Service ID, Template ID, Public Key). Veuillez renseigner le fichier environment.ts.',
      };
    }

    try {
      // 4. Appel officiel EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        params,
        {
          publicKey: publicKey,
        }
      );

      if (response.status === 200) {
        this.lastSubmissionTime = Date.now();
        return {
          success: true,
          message:
            'Votre message a été transmis avec succès à l’équipe TOURÉ ACCESSORIES COMPANY. Nous vous répondrons dans les plus brefs délais !',
        };
      }

      return {
        success: false,
        message: `Erreur inattendue lors de la transmission (${response.status}). Veuillez réessayer ou nous contacter directement par WhatsApp.`,
      };
    } catch (error: unknown) {
      console.error('[EmailService] Échec de l’envoi EmailJS :', error);

      let detail = 'Une erreur est survenue lors de l’envoi de votre message.';
      if (typeof error === 'object' && error !== null && 'text' in error) {
        detail = String((error as { text: unknown }).text);
      } else if (error instanceof Error) {
        detail = error.message;
      }

      return {
        success: false,
        message: `Impossible d'acheminer le message : ${detail}. Vous pouvez également nous joindre directement par téléphone ou WhatsApp.`,
      };
    }
  }
}
