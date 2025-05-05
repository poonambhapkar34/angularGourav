import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicslandingComponent } from './electronicslanding.component';

describe('ElectronicslandingComponent', () => {
  let component: ElectronicslandingComponent;
  let fixture: ComponentFixture<ElectronicslandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicslandingComponent]
    });
    fixture = TestBed.createComponent(ElectronicslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
