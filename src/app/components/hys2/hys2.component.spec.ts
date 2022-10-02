import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hys2Component } from './hys2.component';

describe('Hys2Component', () => {
  let component: Hys2Component;
  let fixture: ComponentFixture<Hys2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hys2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hys2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
