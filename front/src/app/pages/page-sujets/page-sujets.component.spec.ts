import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSujetsComponent } from './page-sujets.component';

describe('PageSujetsComponent', () => {
  let component: PageSujetsComponent;
  let fixture: ComponentFixture<PageSujetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSujetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSujetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
