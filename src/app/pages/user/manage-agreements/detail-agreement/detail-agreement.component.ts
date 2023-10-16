import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-detail-agreement',
  templateUrl: './detail-agreement.component.html',
  styleUrls: ['./detail-agreement.component.less'],
})
export class DetailAgreementComponent {
  requestForm = {
    status: 'eyo',
    name: 'demo',
    agreementID: 'demo',
    applicant: 'demo',
    applicantLegalName: 'demo',
    beneficiary: 'demo',
    issuingBank: 'demo',
    issuingBankCode: 'demo',
    beneficiaryLegalName: 'demo',
    commodityName: 'demo',
    commodityValue: 'demo',
    paymentMethod: 'demo',
    additionalInformation: 'demo',
    date: 'demo',
  };
  confirmModal?: NzModalRef;
  isVisible = false;
  validateForm: FormGroup<{
    reason: FormControl<string>;
  }>;

  constructor(private modal: NzModalService, private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      reason: ['', [Validators.required]],
    });
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to accept this agreement?',
      nzContent:
        'When clicked the OK button, this dialog will be closed after 1 second',
      nzCancelText: 'Cancel',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  showModalRefuse(): void {
    this.isVisible = true;
  }

  handleOkRefuse(): void {
    console.log('Button ok clicked!');
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.isVisible = false;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleCancelRefuse(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
