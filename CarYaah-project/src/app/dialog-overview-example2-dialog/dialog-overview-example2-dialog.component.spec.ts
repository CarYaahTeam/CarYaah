import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog2Component } from './dialog-overview-example2-dialog.component';

describe('DialogOverviewExampleDialogComponent', () => {
  let component: DialogOverviewExampleDialog2Component;
  let fixture: ComponentFixture<DialogOverviewExampleDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogOverviewExampleDialog2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewExampleDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
