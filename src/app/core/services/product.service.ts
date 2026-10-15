import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly whatsappNumber = '32466331412';

  readonly categories: string[] = [
    'Accessoires automobiles',
    'Technologie et gadgets',
    'Maison et bricolage',
    'Sport et fitness',
  ];

  private readonly products: Product[] = [
    // Accessoires automobiles
    {
      id: 9,
      slug: 'coussin-accoudoir-mouchoirs',
      name: 'Coussin Accoudoir Voiture avec Boîte à Mouchoirs',
      category: 'Accessoires automobiles',
      shortDescription: "Coussin d'accoudoir pour voiture avec boite a mouchoirs integree - confort et praticite au quotidien.",
      description: "Ce coussin d'accoudoir specialement concu pour voiture integre une boite a mouchoirs pratique et accessible directement depuis votre siege. Il se fixe facilement sur votre accoudoir central grace a des sangles reglables universelles. Le rembourrage de haute densite offre un confort optimal pour le bras lors des longs trajets.",
      image: 'assets/images/produits/coussin-accoudoir-user-0.jpg',
      images: [
        'assets/images/produits/coussin-accoudoir-user-0.jpg',
        'assets/images/produits/coussin-accoudoir-user-1.jpg',
        'assets/images/produits/coussin-accoudoir-user-2.jpg',
        'assets/images/produits/coussin-accoudoir-user-3.jpg',
      ],
      badge: 'Confort',
      featured: true,
      available: true,
      features: [
        "Boite a mouchoirs integree - acces rapide depuis le siege conducteur ou passager",
        "Fixation universelle par sangles reglables, compatible la plupart des vehicules",
        "Rembourrage haute densite pour un confort optimal du bras",
        "Disponible en plusieurs coloris et matieres",
        "Facile a nettoyer et a entretenir",
      ],
      contents: [
        "Coussin accoudoir avec boite a mouchoirs",
        "Sangles de fixation reglables",
        "Notice de pose",
      ],
    },
    // Technologie et gadgets
    {
      id: 3,
      slug: 'sonnette-video-sans-fil',
      name: 'Sonnette Vidéo sans fil',
      category: 'Technologie et gadgets',
      shortDescription: "Sonnette connectée avec caméra intégrée pour surveiller votre entrée en temps réel depuis votre smartphone.",
      description: "Cette sonnette vidéo sans fil vous permet de voir, entendre et parler à vos visiteurs depuis votre smartphone. Grâce à sa caméra intégrée et sa connexion Wi-Fi, elle offre une surveillance en temps réel de votre entrée. Compatible Android et iOS.",
      image: 'assets/images/produits/sonnette-video-sans-fil.jpg',
      badge: 'Connecté',
      featured: true,
      available: true,
      features: [
        "Camera integree avec vision nocturne pour surveiller 24h/24",
        "Connexion Wi-Fi et notifications en temps reel sur smartphone",
        "Communication bidirectionnelle via l'application mobile",
        "Installation sans fil, compatible Android et iOS",
        "Detection de mouvement avec alertes instantanees",
      ],
      contents: [
        "Sonnette video sans fil",
        "Support de fixation mural",
        "Cable de recharge",
        "Guide d'installation rapide",
      ],
    },
    {
      id: 4,
      slug: 'aspirateur-eau-poussiere',
      name: 'Aspirateur eau et poussière',
      category: 'Technologie et gadgets',
      shortDescription: "Aspirateur polyvalent conçu pour aspirer aussi bien la poussière que les liquides renversés.",
      description: "Cet aspirateur multifonction eau et poussiere est l'outil ideal pour un nettoyage complet et efficace. Il aspire aussi bien les poussieres fines que les liquides renverses. Robuste et puissant, il convient a la maison comme au garage.",
      image: 'assets/images/produits/aspirateur-eau-poussiere.jpg',
      badge: 'Polyvalent',
      featured: true,
      available: true,
      features: [
        "Double fonction : aspiration de la poussiere et des liquides",
        "Cuve de grande capacite pour des nettoyages prolonges",
        "Filtre haute efficacite retenant les particules fines",
        "Accessoires multiples inclus pour chaque surface",
        "Robuste et adapte a une utilisation intensive",
      ],
      contents: [
        "Aspirateur eau et poussiere",
        "Tube et flexible d'aspiration",
        "Accessoires de nettoyage",
        "Filtre de rechange",
        "Notice d'utilisation",
      ],
    },
    {
      id: 5,
      slug: 'booster-batterie-portable',
      name: 'Booster de batterie portable',
      category: 'Technologie et gadgets',
      shortDescription: "Booster de demarrage compact avec batterie lithium pour demarrer votre vehicule en cas de panne.",
      description: "Ce booster de batterie portable integre une batterie lithium haute densite pour redemarrer votre vehicule en autonomie. Ultra-compact, il tient dans la boite a gants et peut aussi servir de batterie externe pour vos appareils mobiles.",
      image: 'assets/images/produits/booster-batterie-portable.jpg',
      badge: 'Pro',
      featured: true,
      available: true,
      features: [
        "Batterie lithium haute densite pour un demarrage puissant",
        "Fonctionne sans vehicule d'appoint - autonome et compact",
        "Double fonction : demarreur + batterie externe USB",
        "Pinces de demarrage intelligentes avec protection contre l'inversion",
        "Indicateur LED du niveau de charge",
      ],
      contents: [
        "Booster de batterie portable",
        "Cables de demarrage avec pinces intelligentes",
        "Cable de recharge USB-C",
        "Pochette de transport",
        "Manuel d'utilisation",
      ],
    },
    {
      id: 12,
      slug: 'machine-cafe-portable',
      name: 'Machine à café portable',
      category: 'Technologie et gadgets',
      shortDescription: "Machine à café compacte et portable pour savourer un café de qualité où que vous soyez.",
      description: "Cette machine à café portable vous permet de préparer un café de qualité n'importe où : au bureau, en déplacement ou en voyage. Légère et compacte, elle s'utilise facilement sans branchement complexe.",
      image: 'assets/images/produits/machine-cafe1.jpg',
      badge: 'Nouveauté',
      featured: true,
      available: true,
      features: [
        "Format compact et leger, ideal pour les deplacements",
        "Prepare un cafe de qualite rapidement",
        "Compatible avec differents types de cafe selon le modele",
        "Facile a nettoyer et a entretenir",
        "Alimentation et capacite : a confirmer selon modele",
      ],
      contents: [
        "Machine a cafe portable",
        "Cable d'alimentation",
        "Notice d'utilisation",
      ],
    },
    {
      id: 14,
      slug: 'traceur-gps',
      name: 'Traceur GPS',
      category: 'Technologie et gadgets',
      shortDescription: 'Traceur GPS compact pour la géolocalisation et la sécurisation en temps réel de vos véhicules et objets de valeur.',
      description: "Ce traceur GPS compact et discret assure la géolocalisation précise et en temps réel de vos véhicules (voiture, moto, scooter), bagages ou objets personnels. Facile à dissimuler, il offre un suivi à distance direct sur votre smartphone avec des alertes instantanées en cas de déplacement suspect.",
      image: 'assets/images/produits/traceur-gps.jpg',
      badge: 'Sécurité',
      featured: true,
      available: true,
      features: [
        'Géolocalisation précise en temps réel consultable sur smartphone',
        'Format miniature ultra-discret, facile à installer ou dissimuler',
        'Alertes intelligentes en cas de mouvement suspect ou sortie de zone',
        'Batterie longue durée avec gestion optimisée de l’énergie',
        'Historique des trajets et positions consultables via l’application',
      ],
      contents: [
        'Traceur GPS compact',
        'Câble de recharge USB',
        'Support et adhésif de fixation',
        'Manuel d’utilisation et configuration rapide',
      ],
    },
    {
      id: 15,
      slug: 'camera-vlog',
      name: 'Caméra Vlog',
      category: 'Technologie et gadgets',
      shortDescription: 'Caméra de poche compacte et stabilisée, spécialement conçue pour le vlogging et la création de contenu.',
      description: "Cette caméra vlog de poche est conçue pour les créateurs de contenu, voyageurs et passionnés de vidéo. Compacte et ergonomique, elle se glisse facilement dans une poche tout en offrant une stabilisation remarquable et un écran de contrôle pour cadrer parfaitement chaque prise en mouvement.",
      image: 'assets/images/produits/camera-vlog.jpg',
      badge: 'Créateur',
      featured: true,
      available: true,
      features: [
        'Format de poche ultra-compact pour une portabilité totale au quotidien',
        'Conçue spécialement pour le vlogging et les vidéos en mouvement',
        'Écran de contrôle intégré pour visualiser et cadrer facilement',
        'Microphone intégré offrant une capture audio claire et nette',
        'Transfert rapide des photos et vidéos vers smartphone ou PC',
      ],
      contents: [
        'Caméra vlog de poche',
        'Câble USB de transfert et recharge',
        'Dragonne de maintien et transport',
        'Guide de prise en main rapide',
      ],
    },
    // Maison et bricolage
    {
      id: 10,
      slug: 'pistolet-peinture-electrique1',
      name: 'Pistolet à peinture électrique',
      category: 'Maison et bricolage',
      shortDescription: 'Pistolet à peinture électrique haute performance pour des applications précises, rapides et homogènes.',
      description: "Ce pistolet à peinture électrique est la solution idéale pour tous vos projets de rénovation, peinture et bricolage. Grâce à son moteur puissant et sa buse réglable multi-jets, il permet d'appliquer la peinture de manière rapide, homogène et sans coulure sur les murs, meubles, clôtures et boiseries.",
      image: 'assets/images/produits/pistolet-peinture-electrique1.jpg',
      badge: 'Bricolage',
      featured: true,
      available: true,
      features: [
        'Pulvérisation homogène et rapide sans coulure ni trace de pinceau',
        'Buse réglable avec plusieurs orientations de jet (horizontal, vertical, circulaire)',
        'Régulateur de débit pour s’adapter à chaque type de support',
        'Réservoir grande capacité démontable pour un nettoyage facile',
        'Compatible peintures acryliques, lasures, vernis et laques',
      ],
      contents: [
        'Pistolet à peinture électrique',
        'Réservoir à peinture gradué',
        'Buse de pulvérisation et accessoires de débit',
        'Gobelet de mesure de viscosité',
        'Kit de nettoyage et notice d’utilisation',
      ],
    },
    // Sport et fitness
    {
      id: 6,
      slug: 'planche-fitness-pliable',
      name: 'Planche de fitness pliable multifonction',
      category: 'Sport et fitness',
      shortDescription: "Planche de fitness pliable pour entrainer plusieurs groupes musculaires a domicile.",
      description: "Cette planche de fitness pliable et multifonction est concue pour un entrainement complet a domicile. Elle permet de travailler les pectoraux, les triceps, les epaules et la sangle abdominale grace a ses multiples positions d'utilisation.",
      image: 'assets/images/produits/planche-fitness-pliable.jpg',
      badge: 'Fitness',
      featured: true,
      available: true,
      features: [
        "Multifonction : pliable pour differentes positions d'exercice",
        "Travail des pectoraux, triceps, epaules et abdominaux",
        "Construction solide et stable pour une pratique en securite",
        "Format compact facilement rangeable et transportable",
        "Adapte aux debutants et aux sportifs confirmes",
      ],
      contents: [
        "Planche de fitness pliable multifonction",
        "Guide d'exercices recommandes",
        "Notice de montage",
      ],
    },
    {
      id: 7,
      slug: 'banc-musculation-multifonction',
      name: 'Banc de musculation multifonction',
      category: 'Sport et fitness',
      shortDescription: "Banc de musculation reglable pour des seances de renforcement musculaire completes a domicile.",
      description: "Ce banc de musculation multifonction et reglable vous permet de realiser une large variete d'exercices de renforcement musculaire a domicile. Robuste et stable, il s'adapte a de nombreuses positions pour cibler differents groupes musculaires.",
      image: 'assets/images/produits/banc-musculation-multifonction.jpg',
      badge: 'Muscu',
      featured: true,
      available: true,
      features: [
        "Positions reglables : plat, incline et decline",
        "Acier robuste pour une stabilite et une longevite maximales",
        "Rembourrage confortable pour les seances longues",
        "Compatible avec halteres et barres selon les exercices",
        "Dimensions et charge maximale : a confirmer selon modele",
      ],
      contents: [
        "Banc de musculation multifonction",
        "Boulons et kit de montage",
        "Guide d'exercices",
        "Notice d'assemblage",
      ],
    },
    {
      id: 8,
      slug: 'station-traction-dips',
      name: 'Station de traction et dips',
      category: 'Sport et fitness',
      shortDescription: "Station polyvalente pour les tractions, dips et abdominaux - entrainement du haut du corps complet.",
      description: "Cette station de traction et dips est l'equipement incontournable pour sculpter le haut du corps a domicile. Elle permet d'effectuer des tractions, des dips, des releves de genoux et des exercices d'abdominaux en toute securite.",
      image: 'assets/images/produits/station-traction-dips.jpg',
      badge: 'Populaire',
      featured: true,
      available: true,
      features: [
        "Traction, dips, releves de genoux - entrainement haut du corps complet",
        "Poignees ergonomiques rembourrées pour le confort des mains",
        "Structure acier robuste et antiderapante",
        "Reglable en hauteur selon votre morphologie",
        "Charge maximale et dimensions : a confirmer selon modele",
      ],
      contents: [
        "Station de traction et dips",
        "Kit de montage et visserie",
        "Guide d'exercices inclus",
        "Notice d'assemblage",
      ],
    },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  getFeaturedProducts(limit: number = 8): Product[] {
    return this.products.filter((p) => p.featured ?? true).slice(0, limit);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getProductBySlug(slug: string): Product | undefined {
    const clean = (s: string) =>
      s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    const target = clean(slug);
    return this.products.find(
      (p) =>
        p.slug === slug ||
        p.id.toString() === slug ||
        (p.slug && clean(p.slug) === target) ||
        clean(p.name) === target
    );
  }

  getCategories(): string[] {
    return [...this.categories];
  }

  getCountByCategory(categoryName: string): number {
    if (!categoryName || categoryName === 'all') {
      return this.products.length;
    }
    return this.products.filter(
      (p) => p.category.trim().toLowerCase() === categoryName.trim().toLowerCase()
    ).length;
  }

  getWhatsAppOrderUrl(productName: string): string {
    const message = `Bonjour TAC, je souhaite obtenir des informations pour commander le produit "${productName}". Pouvez-vous me communiquer le prix et la disponibilite ?`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
