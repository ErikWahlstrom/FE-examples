import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionCardComponent } from './dimension-card.component';

describe('DimensionCardComponent', () => {
  let component: DimensionCardComponent;
  let fixture: ComponentFixture<DimensionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
