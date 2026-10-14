/**
 * Interface des variables envoyées au modèle EmailJS.
 * Les noms des propriétés correspondent rigoureusement aux variables configurées
 * dans le template EmailJS : from_name, from_email, subject, message.
 */
export interface EmailJsContactParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

/**
 * Interface du formulaire de contact au niveau du composant Angular.
 */
export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Champ anti-spam masqué
}

/**
 * Résultat de l'opération d'envoi d'e-mail.
 */
export interface EmailSendResult {
  success: boolean;
  message: string;
}
