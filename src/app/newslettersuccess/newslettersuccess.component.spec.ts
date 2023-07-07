import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersuccessComponent } from './newslettersuccess.component';

describe('NewslettersuccessComponent', () => {
  let component: NewslettersuccessComponent;
  let fixture: ComponentFixture<NewslettersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslettersuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewslettersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
