import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingtechnicsComponent } from './databindingtechnics.component';

describe('DatabindingtechnicsComponent', () => {
  let component: DatabindingtechnicsComponent;
  let fixture: ComponentFixture<DatabindingtechnicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingtechnicsComponent]
    });
    fixture = TestBed.createComponent(DatabindingtechnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
