import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LogModalComponent } from './log-modal.component';

describe('LogModalComponent', () => {
  let component: LogModalComponent;
  let fixture: ComponentFixture<LogModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [LogModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogModalComponent);
    component = fixture.componentInstance;
    component.log = {
      id: 1,
      type: 'test',
      title: '',
      description: '',
      link: '',
      date: ''
    };

    component.logTypes = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
