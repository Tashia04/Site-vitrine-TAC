import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Product } from '../../core/models/product';

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

interface ValuePillar {
  title: string;
  description: string;
}

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, ProductCard],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  private readonly productService = inject(ProductService);

  readonly products: Product[] = this.productService.getFeaturedProducts();

  readonly advantages: Advantage[] = [
    {
      title: 'Qualité garantie',
      description: 'Des produits sélectionnés avec soin.',
      icon: 'shield',
    },
    {
      title: 'Prix attractifs',
      description: 'Le meilleur rapport qualité-prix.',
      icon: 'tag',
    },
    {
      title: 'Livraison rapide',
      description: 'Livraison partout au Sénégal.',
      icon: 'truck',
    },
    {
      title: 'Service client',
      description: 'Une équipe à votre écoute.',
      icon: 'headset',
    },
  ];

  readonly valuePillars: ValuePillar[] = [
    {
      title: 'Qualité certifiée',
      description: 'Des articles testés pour leur durabilité et leur performance.',
    },
    {
      title: 'Confiance & Transparence',
      description: 'Une relation de proximité et de fiabilité avec nos clients.',
    },
    {
      title: 'Innovation continue',
      description: 'Des technologies pratiques pour simplifier votre quotidien.',
    },
    {
      title: 'Proximité locale',
      description: 'Une entreprise sénégalaise fière d’accompagner ses clients partout.',
    },
  ];
}
