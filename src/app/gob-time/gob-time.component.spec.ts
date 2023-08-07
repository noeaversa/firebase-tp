import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobTimeComponent } from './gob-time.component';

describe('GobTimeComponent', () => {
  let component: GobTimeComponent;
  let fixture: ComponentFixture<GobTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
