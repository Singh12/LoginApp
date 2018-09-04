import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCarouselComponent } from './footer-carousel.component';

describe('FooterCarouselComponent', () => {
  let component: FooterCarouselComponent;
  let fixture: ComponentFixture<FooterCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
