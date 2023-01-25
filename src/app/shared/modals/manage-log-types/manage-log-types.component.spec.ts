import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageLogTypesComponent } from './manage-log-types.component';

describe('ManageLogTypesComponent', () => {
  let component: ManageLogTypesComponent;
  let fixture: ComponentFixture<ManageLogTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLogTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLogTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
