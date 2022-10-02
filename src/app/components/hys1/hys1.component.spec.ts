import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hys1Component } from './hys1.component';

describe('Hys1Component', () => {
  let component: Hys1Component;
  let fixture: ComponentFixture<Hys1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hys1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hys1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
