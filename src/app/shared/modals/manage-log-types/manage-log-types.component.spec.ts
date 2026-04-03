import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogTypeService } from '../../services/log-type.service';

import { ManageLogTypesComponent } from './manage-log-types.component';

describe('ManageLogTypesComponent', () => {
  let component: ManageLogTypesComponent;
  let fixture: ComponentFixture<ManageLogTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [ManageLogTypesComponent],
    imports: [],
    providers: [
        NgbActiveModal,
        LogTypeService,
        provideHttpClient(withInterceptorsFromDi())
    ]
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
