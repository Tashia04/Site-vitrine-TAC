import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { APropos } from './a-propos';

describe('APropos', () => {
  let component: APropos;
  let fixture: ComponentFixture<APropos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APropos],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(APropos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
