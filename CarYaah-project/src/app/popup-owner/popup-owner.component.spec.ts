import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOwnerComponent } from './popup-owner.component';

describe('PopupOwnerComponent', () => {
  let component: PopupOwnerComponent;
  let fixture: ComponentFixture<PopupOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
