import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { format } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { AgreementService } from 'src/app/service/agreement-service/agreement.service';

@Component({
  selector: 'app-new-agreement',
  templateUrl: './new-agreement.component.html',
  styleUrls: ['./new-agreement.component.less'],
})
export class NewAgreementComponent implements OnInit {
  validateNewAgreementForm!: UntypedFormGroup;
  newAgreement = {
    importer: 'HUST',
    exporter: 'An Phat Computer',
    issuingBank: 'MB Bank',
    advisingBank: 'TP Bank',
    commodity: 'pc',
    price: '10000000 VND',
    paymentMethod: 'cash',
    additionalInfo: 'need Invoice',
    deadline: '12/10/2023',
  };

  constructor(
    private fb: UntypedFormBuilder,
    private msg: NzMessageService,
    private agreementSer: AgreementService
  ) {}

  submitForm(): void {
    if (this.validateNewAgreementForm.valid) {
      console.log('submit', this.validateNewAgreementForm.value);
      // this.newAgreement = { ...this.validateNewAgreementForm.value };
      this.agreementSer.create(this.newAgreement).subscribe((res) => {
        console.log("abcccc");
        
        console.log(res);
      });
    } else {
      Object.values(this.validateNewAgreementForm.controls).forEach(
        (control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        }
      );
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateNewAgreementForm.get('nickname')!.clearValidators();
      this.validateNewAgreementForm.get('nickname')!.markAsPristine();
    } else {
      this.validateNewAgreementForm
        .get('nickname')!
        .setValidators(Validators.required);
      this.validateNewAgreementForm.get('nickname')!.markAsDirty();
    }
    this.validateNewAgreementForm.get('nickname')!.updateValueAndValidity();
  }

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
    this.validateNewAgreementForm = this.fb.group({
      name: ['abc', [Validators.required]],
      agreementID: 'sdsd',
      applicant: 'abc',
      applicantLegalName: 'abc',
      beneficiary: ['s', [Validators.required]],
      issuingBank: ['s', [Validators.required]],
      issuingBankCode: 'abc',
      beneficiaryLegalName: 'abc',
      commodityName: ['s', [Validators.required]],
      commodityValue: [0, [Validators.required]],
      paymentMethod: ['s', [Validators.required]],
      additionalInformation: '',
      date: [format(currentDate, 'dd-MM-yyyy')],
      nickname: 'abc',
      required: false,
    });
  }
}
