import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.css']
})
export class LogModalComponent implements OnInit {
  logForm: FormGroup;
  submitted: boolean;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.submitted = false;
   }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      type: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      date: new FormControl("", Validators.required)
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
