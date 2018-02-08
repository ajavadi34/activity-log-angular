import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.css']
})
export class LogModalComponent implements OnInit {
  @Input() log: Log;
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
      date: new FormControl(this.log.date, Validators.required)
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
  }
}
