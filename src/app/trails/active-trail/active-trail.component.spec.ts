import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTrailComponent } from './active-trail.component';

describe('ActiveTrailComponent', () => {
  let component: ActiveTrailComponent;
  let fixture: ComponentFixture<ActiveTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
