import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBagComponent } from './cart-bag.component';

describe('CartBagComponent', () => {
  let component: CartBagComponent;
  let fixture: ComponentFixture<CartBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
