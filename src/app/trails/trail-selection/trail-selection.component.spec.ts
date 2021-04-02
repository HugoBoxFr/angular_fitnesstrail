import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailSelectionComponent } from './trail-selection.component';

describe('TrailSelectionComponent', () => {
  let component: TrailSelectionComponent;
  let fixture: ComponentFixture<TrailSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
