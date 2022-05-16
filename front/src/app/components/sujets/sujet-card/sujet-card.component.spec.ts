import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetCardComponent } from './sujet-card.component';

describe('SujetCardComponent', () => {
  let component: SujetCardComponent;
  let fixture: ComponentFixture<SujetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
