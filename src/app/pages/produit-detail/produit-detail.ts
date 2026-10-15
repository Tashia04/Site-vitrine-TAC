import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produit-detail.html',
  styleUrl: './produit-detail.scss',
})
export class ProduitDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  readonly product = signal<Product | undefined>(undefined);
  readonly notFound = signal<boolean>(false);
  readonly similarProducts = signal<Product[]>([]);
  readonly activeImage = signal<string>('');

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idOrSlug = params.get('id');
      if (idOrSlug) {
        this.loadProduct(idOrSlug);
      } else {
        this.notFound.set(true);
      }
    });
  }

  private loadProduct(param: string): void {
    const numericId = Number(param);
    let foundProduct: Product | undefined;

    if (!isNaN(numericId)) {
      foundProduct = this.productService.getProductById(numericId);
    }

    if (!foundProduct) {
      foundProduct = this.productService.getProductBySlug(param);
    }

    if (foundProduct) {
      this.product.set(foundProduct);
      this.notFound.set(false);
      // Initialise l'image active avec l'image principale
      this.activeImage.set(foundProduct.image);

      // Suggestions de produits similaires dans la même catégorie
      const similar = this.productService
        .getProducts()
        .filter((p) => p.id !== foundProduct!.id && p.category === foundProduct!.category)
        .slice(0, 3);
      this.similarProducts.set(similar);

      // Scroll vers le haut lors de la navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.product.set(undefined);
      this.notFound.set(true);
    }
  }

  /**
   * Change l'image affichée dans la galerie.
   */
  setActiveImage(img: string): void {
    this.activeImage.set(img);
  }

  /**
   * Génère le lien WhatsApp prérempli pour ce produit spécifique.
   */
  getWhatsAppUrl(productName: string): string {
    return this.productService.getWhatsAppOrderUrl(productName);
  }
}
