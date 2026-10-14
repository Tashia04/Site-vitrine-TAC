import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Pillar {
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-a-propos',
  imports: [RouterLink],
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.scss',
})
export class APropos {
  readonly pillars: Pillar[] = [
    {
      title: 'Qualité',
      description: 'Des produits sélectionnés avec soin, rigoureusement testés pour répondre aux standards automobiles et domestiques les plus stricts.',
      icon: 'shield',
    },
    {
      title: 'Confiance',
      description: 'Une relation sincère et durable avec chacun de nos clients. Nous nous engageons sur la conformité de chaque article livré.',
      icon: 'handshake',
    },
    {
      title: 'Innovation',
      description: 'Des solutions technologiques modernes et pratiques, pensées pour simplifier vos trajets et sublimer vos espaces.',
      icon: 'lightbulb',
    },
    {
      title: 'Proximité',
      description: 'Basés à Dakar, nous sommes au plus près de vous avec un service de livraison rapide et une assistance réactive 7j/7.',
      icon: 'map-pin',
    },
  ];

  readonly stats: Stat[] = [
    {
      value: '100%',
      label: 'Qualité Contrôlée',
      description: 'Chaque article inspecté avant expédition',
    },
    {
      value: '14 Régions',
      label: 'Livraison Sénégal',
      description: 'Expédition rapide partout au pays',
    },
    {
      value: '24/7',
      label: 'Assistance Réactive',
      description: 'Support WhatsApp et téléphone direct',
    },
    {
      value: '5/5',
      label: 'Avis Clients',
      description: 'Une communauté de passionnés satisfaits',
    },
  ];
}
