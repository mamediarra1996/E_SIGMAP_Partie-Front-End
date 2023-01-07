import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilGestionComponent } from './outil-gestion.component';

describe('OutilGestionComponent', () => {
  let component: OutilGestionComponent;
  let fixture: ComponentFixture<OutilGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutilGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutilGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
