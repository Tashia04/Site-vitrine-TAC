import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProduitDetail } from './produit-detail';

describe('ProduitDetail', () => {
  let component: ProduitDetail;
  let fixture: ComponentFixture<ProduitDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitDetail],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
