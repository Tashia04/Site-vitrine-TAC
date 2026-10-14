import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product';

interface CategoryFilterItem {
  id: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './produits.html',
  styleUrl: './produits.scss',
})
export class Produits {
  private readonly productService = inject(ProductService);

  /** Tous les produits issus du service */
  readonly products: Product[] = this.productService.getProducts();

  /** État du champ de recherche */
  readonly searchQuery = signal<string>('');

  /** Catégorie actuellement sélectionnée ('all' ou le nom exact de la catégorie) */
  readonly selectedCategory = signal<string>('all');

  /**
   * Catégories disponibles avec leurs compteurs calculés dynamiquement.
   */
  readonly categoriesList = computed<CategoryFilterItem[]>(() => {
    const rawCategories = this.productService.getCategories();
    const items: CategoryFilterItem[] = [
      {
        id: 'all',
        name: 'Tous les produits',
        count: this.products.length,
      },
      ...rawCategories.map((cat) => ({
        id: cat,
        name: cat,
        count: this.products.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length,
      })),
    ];
    return items;
  });

  /**
   * Produits filtrés combinant la recherche textuelle (nom, description, catégorie)
   * et le filtre de catégorie sélectionné.
   */
  readonly filteredProducts = computed<Product[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const activeCat = this.selectedCategory();

    return this.products.filter((product) => {
      // 1. Filtrage par catégorie
      const matchesCategory =
        activeCat === 'all' ||
        product.category.toLowerCase() === activeCat.toLowerCase();

      if (!matchesCategory) {
        return false;
      }

      // 2. Filtrage par recherche textuelle (nom, description, courte description, catégorie)
      if (!query) {
        return true;
      }

      const inName = product.name.toLowerCase().includes(query);
      const inDesc = product.description.toLowerCase().includes(query);
      const inShortDesc = product.shortDescription?.toLowerCase().includes(query) ?? false;
      const inCat = product.category.toLowerCase().includes(query);

      return inName || inDesc || inShortDesc || inCat;
    });
  });

  /**
   * Sélectionne une catégorie.
   */
  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  /**
   * Met à jour la requête de recherche en temps réel.
   */
  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  /**
   * Réinitialise les filtres et la recherche.
   */
  resetFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('all');
  }

  /**
   * Génère l'URL WhatsApp préremplie pour le produit sélectionné.
   */
  getWhatsAppOrderUrl(productName: string): string {
    return this.productService.getWhatsAppOrderUrl(productName);
  }
}
