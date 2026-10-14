import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize invalid form when empty', () => {
    expect(component.contactForm.valid).toBe(false);
  });

  it('should be valid when required fields are filled', () => {
    component.contactForm.patchValue({
      fullName: 'Amadou Touré',
      email: 'amadou@example.com',
      subject: 'Demande d’information accessoire',
      message: 'Bonjour, je souhaiterais des renseignements sur l’aspirateur sans fil.',
    });
    expect(component.contactForm.valid).toBe(true);
  });
});
