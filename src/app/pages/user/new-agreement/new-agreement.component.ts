import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';



@Component({
  selector: 'app-new-agreement',
  templateUrl: './new-agreement.component.html',
  styleUrls: ['./new-agreement.component.less']
})
export class NewAgreementComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('nickname')!.clearValidators();
      this.validateForm.get('nickname')!.markAsPristine();
    } else {
      this.validateForm.get('nickname')!.setValidators(Validators.required);
      this.validateForm.get('nickname')!.markAsDirty();
    }
    this.validateForm.get('nickname')!.updateValueAndValidity();
  }

  constructor(private fb: UntypedFormBuilder, private msg: NzMessageService) {}
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  ngOnInit(): void {
    const currentDate = new Date();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      agreementID: ['123456'],
      applicant: ['Demo Corporation'],
      applicantLegalName: ['Demo Corporation'],
      beneficiary: ['Beneficiary', [Validators.required]],
      issuingBank: ['Issuing bank', [Validators.required]],
      issuingBankCode: ['BIC--Issuing Bank Corp'],
      beneficiaryLegalName: ['Beneficiary'],
      commodityName: ['example', [Validators.required]],
      commodityValue: ['1200000', [Validators.required]],
      paymentMethod: ['Digital money', [Validators.required]],
      additionalInformation: [null],
      date: [format(currentDate, 'dd-MM-yyyy')],
      nickname: [null],
      required: [false]
    });
  }
}
