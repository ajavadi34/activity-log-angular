import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLogTypesComponent } from './manage-log-types.component';

describe('ManageLogTypesComponent', () => {
  let component: ManageLogTypesComponent;
  let fixture: ComponentFixture<ManageLogTypesComponent>;

  beforeEach(async(() => {
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
