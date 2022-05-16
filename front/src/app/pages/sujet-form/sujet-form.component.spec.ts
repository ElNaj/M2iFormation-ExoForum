import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetFormComponent } from './sujet-form.component';

describe('SujetFormComponent', () => {
  let component: SujetFormComponent;
  let fixture: ComponentFixture<SujetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
