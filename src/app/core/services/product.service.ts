import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * Numéro WhatsApp officiel TAC pour les commandes et renseignements.
   * Format international sans signes : 32466331412 (+32 466 33 14 12).
   */
  readonly whatsappNumber = '32466331412';

  /**
   * Liste des catégories officielles de TOURÉ ACCESSORIES COMPANY (TAC).
   */
  readonly categories: string[] = [
    'Accessoires automobiles',
    'Technologie et gadgets',
    'Maison et équipements',
    'Sport et fitness',
  ];

  /**
   * Catalogue des 8 produits initiaux de TAC.
   * Conformément aux spécifications, les informations non confirmées restent optionnelles
   * ou mentionnées "À confirmer" sans inventer de caractéristiques fictives.
   */
  private readonly products: Product[] = [
    // -------------------------------------------------------------------------
    // Catégorie 1 : Accessoires automobiles
    // -------------------------------------------------------------------------
    {
      id: 1,
      slug: 'aspirateur-voiture-portable',
      name: 'Aspirateur de voiture portable',
      category: 'Accessoires automobiles',
      shortDescription:
        'Aspirateur compact conçu pour faciliter le nettoyage de l’intérieur d’un véhicule.',
      description:
        'Aspirateur compact spécialement conçu pour faciliter l’entretien et le nettoyage de l’habitacle d’un véhicule. Grâce à son format ergonomique et maniable, il permet de dépoussiérer les sièges, nettoyer les tapis de sol et atteindre les recoins difficiles d’accès.',
      image: 'assets/images/produits/aspirateur-voiture.jpg',
      badge: 'Best-Seller',
      featured: true,
      available: true,
      features: [
        'Format compact et léger pour une prise en main immédiate',
        'Nettoyage adapté aux sièges, recoins et tapis de voiture',
        'Alimentation : selon le modèle (à confirmer)',
        'Embouts adaptés aux zones étroites de l’habitacle',
      ],
      contents: [
        'Aspirateur de voiture portable',
        'Embout suceur plat pour recoins',
        'Câble d’alimentation / recharge',
        'Manuel d’utilisation',
      ],
    },
    {
      id: 2,
      slug: 'booster-batterie-portable',
      name: 'Booster de batterie portable',
      category: 'Accessoires automobiles',
      shortDescription:
        'Appareil conçu pour aider au démarrage d’un véhicule lorsque la batterie est déchargée, selon sa compatibilité.',
      description:
        'Appareil conçu pour apporter une aide précieuse au démarrage d’un véhicule lors d’une panne de batterie inopinée, selon les spécifications et compatibilités du véhicule. Compact et sécurisé, cet accessoire est un allié indispensable à garder dans votre coffre pour tous vos déplacements.',
      image: 'assets/images/produits/demarreur-batterie.jpg',
      badge: 'Indispensable',
      featured: true,
      available: true,
      features: [
        'Assistance au démarrage d’urgence en toute autonomie',
        'Pinces de connexion sécurisées avec protections intégrées',
        'Format portable facile à ranger dans le coffre ou sous un siège',
        'Capacité et puissance de démarrage : à confirmer selon modèle',
      ],
      contents: [
        'Booster de batterie portable',
        'Jeu de pinces de démarrage avec protection',
        'Câble de recharge',
        'Guide d’utilisation et consignes de sécurité',
      ],
    },
    {
      id: 3,
      slug: 'diffuseur-parfum-voiture',
      name: 'Diffuseur de parfum pour voiture',
      category: 'Accessoires automobiles',
      shortDescription:
        'Accessoire destiné à apporter une ambiance parfumée à l’habitacle.',
      description:
        'Accessoire élégant conçu pour instaurer une ambiance olfactive agréable et continue à bord de votre véhicule. Son design soigné s’intègre discrètement sur la grille d’aération de votre tableau de bord sans altérer l’esthétique intérieure.',
      image: 'assets/images/produits/diffuseur-parfum.jpg',
      badge: 'Premium',
      featured: true,
      available: true,
      features: [
        'Diffusion subtile et régulière pour tout l’habitacle',
        'Fixation simple et stable sur grille de ventilation',
        'Type de diffusion, alimentation et autonomie : à confirmer selon modèle',
        'Design sobre aux finitions métalliques élégantes',
      ],
      contents: [
        'Diffuseur de parfum automobile',
        'Cartouche / recharge parfumée',
        'Notice d’installation rapide',
      ],
    },

    // -------------------------------------------------------------------------
    // Catégorie 2 : Technologie et gadgets
    // -------------------------------------------------------------------------
    {
      id: 4,
      slug: 'camera-poche-stabilisee',
      name: 'Caméra de poche stabilisée',
      category: 'Technologie et gadgets',
      shortDescription:
        'Caméra compacte destinée à la création de vidéos, aux vlogs et aux prises de vue en déplacement.',
      description:
        'Caméra ultra-compacte pensée pour la création de contenu vidéo, le vlogging et la capture de souvenirs spontanés en déplacement. Son format de poche vous permet de l’emporter partout avec vous, en voyage comme au quotidien, pour filmer à tout moment.',
      image: 'assets/images/produits/camera-vlog.jpg',
      badge: 'Nouveauté',
      featured: true,
      available: true,
      features: [
        'Format miniature pour une portabilité totale dans une poche',
        'Conçue pour les vidéos en mouvement et le vlogging',
        'Écran de contrôle intégré pour visualiser vos cadrages',
        'Résolution, stabilisation et autonomie : à confirmer selon fiche technique',
      ],
      contents: [
        'Caméra de poche stabilisée',
        'Câble USB de transfert et recharge',
        'Dragonne de maintien',
        'Guide de démarrage rapide',
      ],
    },
    {
      id: 5,
      slug: 'smart-tag-balise-intelligente',
      name: 'Smart Tag – Balise intelligente de localisation',
      category: 'Technologie et gadgets',
      shortDescription:
        'Petite balise conçue pour aider à retrouver des objets personnels avec un smartphone et une application compatible.',
      description:
        'Petite balise intelligente conçue pour vous aider à retrouver rapidement vos objets du quotidien égarés (clés, portefeuille, sacoche, bagage) via une application mobile compatible sur smartphone. Un compagnon technologique pratique pour votre sérénité.',
      image: 'assets/images/produits/traceur-gps.jpg',
      badge: 'Connecté',
      featured: false,
      available: true,
      features: [
        'Format ultra-léger et discret façon porte-clés',
        'Localisation de proximité et sonnerie d’alerte via smartphone',
        'Connectivité Bluetooth et compatibilité OS : à confirmer selon modèle',
        'Autonomie longue durée (pile remplaçable selon version)',
      ],
      contents: [
        'Balise intelligente Smart Tag TAC',
        'Anneau ou support de fixation porte-clés',
        'Notice d’appairage smartphone',
      ],
    },

    // -------------------------------------------------------------------------
    // Catégorie 3 : Maison et équipements
    // -------------------------------------------------------------------------
    {
      id: 6,
      slug: 'machine-a-laver-portable',
      name: 'Machine à laver portable',
      category: 'Maison et équipements',
      shortDescription:
        'Équipement compact destiné à faciliter le lavage de petites quantités de linge, selon les capacités du modèle.',
      description:
        'Équipement compact et nomade pensé pour faciliter le nettoyage d’appoint de petites pièces de textile (lingerie, vêtements de bébé, serviettes légères). Très utile pour les petits logements, les déplacements professionnels ou les vacances.',
      image: 'assets/images/produits/lave-linge-portable.jpg',
      badge: 'Pratique',
      featured: true,
      available: true,
      features: [
        'Format compact et transportable réduisant l’encombrement',
        'Lavage d’appoint pratique pour les petites quantités de linge',
        'Faible consommation d’eau et d’électricité',
        'Capacité exacte, dimensions et programmes : à confirmer selon modèle',
      ],
      contents: [
        'Machine à laver compacte portable',
        'Tuyau d’évacuation / vidange',
        'Adaptateur secteur d’alimentation',
        'Manuel d’instructions',
      ],
    },

    // -------------------------------------------------------------------------
    // Catégorie 4 : Sport et fitness
    // -------------------------------------------------------------------------
    {
      id: 7,
      slug: 'tapis-de-sport-electrique',
      name: 'Tapis de sport électrique',
      category: 'Sport et fitness',
      shortDescription:
        'Équipement destiné à accompagner certaines activités sportives et routines de remise en forme.',
      description:
        'Équipement moderne d’entraînement conçu pour intégrer facilement la marche active ou la course à pied dans votre routine quotidienne à domicile. Son design élégant et son profil épuré s’adaptent harmonieusement à votre intérieur.',
      image: 'assets/images/produits/tapis-sport.jpg',
      badge: 'Populaire',
      featured: true,
      available: true,
      features: [
        'Conception pliable ultra-plate facilitant le rangement sous un meuble',
        'Affichage numérique des données de séance en temps réel',
        'Surface de course avec système d’amorti',
        'Vitesse maximale, puissance moteur et dimensions : à confirmer selon modèle',
      ],
      contents: [
        'Tapis de sport électrique',
        'Télécommande de contrôle à distance',
        'Dispositif de sécurité',
        'Câble d’alimentation',
        'Guide d’utilisation et conseils de sécurité',
      ],
    },
    {
      id: 8,
      slug: 'appareil-fitness-multifonction',
      name: 'Appareil de fitness multifonction',
      category: 'Sport et fitness',
      shortDescription:
        'Équipement conçu pour accompagner différentes activités d’entraînement.',
      description:
        'Équipement conçu pour accompagner diverses activités d’entraînement physique et de renforcement musculaire à domicile. Permet de réaliser des exercices variés pour le haut et le bas du corps en fonction de vos objectifs de condition physique.',
      image: 'assets/images/produits/appareil-fitness-multifonction.jpg',
      badge: 'Fitness',
      featured: false,
      available: true,
      features: [
        'Polyvalence pour différents groupes musculaires (bras, dos, jambes, sangle abdominale)',
        'Format compact pensé pour les séances de sport à la maison',
        'Poignées ergonomiques pour un confort de prise optimal',
        'Exercices réalisables, dimensions et résistance : à confirmer selon modèle',
      ],
      contents: [
        'Appareil de fitness multifonction',
        'Accessoires et poignées modulables',
        'Guide d’exercices d’entraînement recommandés',
      ],
    },
  ];

  /**
   * Retourne la liste complète de tous les produits.
   */
  getProducts(): Product[] {
    return [...this.products];
  }

  /**
   * Retourne les produits mis en avant (pour la page d'accueil par exemple).
   */
  getFeaturedProducts(): Product[] {
    return this.products.filter((p) => p.featured ?? true);
  }

  /**
   * Recherche un produit par son identifiant numérique.
   */
  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  /**
   * Recherche un produit par son slug (ou identifiant texte).
   */
  getProductBySlug(slug: string): Product | undefined {
    return this.products.find((p) => p.slug === slug || p.id.toString() === slug);
  }

  /**
   * Retourne la liste des catégories officielles.
   */
  getCategories(): string[] {
    return [...this.categories];
  }

  /**
   * Calcule le nombre total de produits pour une catégorie donnée.
   */
  getCountByCategory(categoryName: string): number {
    if (!categoryName || categoryName === 'all') {
      return this.products.length;
    }
    return this.products.filter(
      (p) => p.category.trim().toLowerCase() === categoryName.trim().toLowerCase()
    ).length;
  }

  /**
   * Construit le lien WhatsApp sécurisé et prérempli pour commander ou demander des infos.
   * Format demandé :
   * « Bonjour TAC, je souhaite obtenir des informations pour commander le produit [nom du produit]. Pouvez-vous me communiquer le prix et la disponibilité ? »
   */
  getWhatsAppOrderUrl(productName: string): string {
    const message = `Bonjour TAC, je souhaite obtenir des informations pour commander le produit "${productName}". Pouvez-vous me communiquer le prix et la disponibilité ?`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
