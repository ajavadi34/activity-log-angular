import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Log } from '../../models/Log';
import { LogType } from '../../models/LogType';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.css']
})
export class LogModalComponent implements OnInit {
  @Input() log: Log;
  @Input() logTypes: LogType[];
  logForm: FormGroup;
  submitted: boolean;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.submitted = false;
  }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      type: new FormControl(this.log.type, [Validators.required]),
      title: new FormControl(this.log.title, [Validators.required]),
      description: new FormControl(this.log.description),
      date: new FormControl(this.getDatePickerObj(this.log.date), Validators.required)
    });
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  save(): void {
    this.submitted = true;

    if (this.logForm.invalid) {
      // invalid form
      return;
    }

    let updatedLog: Log = {
      id: this.log.id,
      type: this.logForm.get('type').value,
      title: this.logForm.get('title').value,
      description: this.logForm.get('description').value,
      date: this.getDatePickerValue(this.logForm.get('date').value)
    };
    console.log(updatedLog);
    this.activeModal.close(updatedLog);
  }

  private getDatePickerObj(dateString: string): NgbDateStruct {
    let date: moment.Moment = moment(dateString, 'YYYY/MM/DD');

    return {
      year: +date.format('YYYY'),
      month: +date.format('MM'),
      day: +date.format('DD')
    };
  }

  private getDatePickerValue(dpObj: NgbDateStruct): string {
    let dateString: string = dpObj.year + '/' + dpObj.month + '/' + dpObj.day;
    return moment(dateString, 'YYYY/MM/DD').format('YYYY/MM/DD');
  }
}
