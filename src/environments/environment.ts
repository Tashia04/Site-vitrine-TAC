/**
 * ============================================================================
 * TOURÉ ACCESSORIES COMPANY (TAC) - Configuration Environnement
 * ============================================================================
 * 
 * Centralisation des paramètres et identifiants EmailJS.
 * Remplacez les valeurs ci-dessous par vos identifiants réels EmailJS.
 * 
 * SÉCURITÉ :
 * - Utilisez uniquement votre Public Key (clé publique).
 * - Ne renseignez JAMAIS de clé secrète/privée côté client.
 */
export const environment = {
  production: false,
  emailjs: {
    // Identifiant du service EmailJS connecté (ex: 'service_xxxxxxx')
    serviceId: 'service_lnv0jgz',

    // Identifiant du template d'e-mail EmailJS (ex: 'template_xxxxxxx')
    templateId: 'template_f1y02zt',

    // Clé publique EmailJS (Account > Public Key)
    publicKey: 'qla6PJqCR2MBWNRUX',
  },
};
