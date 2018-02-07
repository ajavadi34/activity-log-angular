import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  header: string;
  body: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  cancel(): void {
    this.activeModal.close('cancelled');
  }

  confirm(): void {
    this.activeModal.close('confirmed');
  }
}
