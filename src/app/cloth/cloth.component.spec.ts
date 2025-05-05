import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothComponent } from './cloth.component';

describe('ClothComponent', () => {
  let component: ClothComponent;
  let fixture: ComponentFixture<ClothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothComponent]
    });
    fixture = TestBed.createComponent(ClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
