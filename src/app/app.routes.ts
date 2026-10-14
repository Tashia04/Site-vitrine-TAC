import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { APropos } from './pages/a-propos/a-propos';
import { Produits } from './pages/produits/produits';
import { ProduitDetail } from './pages/produit-detail/produit-detail';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'a-propos', component: APropos },
  { path: 'produits', component: Produits },
  { path: 'produits/:id', component: ProduitDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'accueil' },
];
