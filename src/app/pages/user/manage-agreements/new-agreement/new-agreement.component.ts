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
    importer: String,
    exporter: String,
    issuingBank: String,
    advisingBank: String,
    commodity: String,
    price: Number,
    paymentMethod: String,
    additionalInfo: String,
    deadline: '12/12/2023',
  };

  constructor(
    private fb: UntypedFormBuilder,
    private msg: NzMessageService,
    private agreementSer: AgreementService,
  ) {}

  submitForm(): void {
    if (this.validateNewAgreementForm.valid) {
      this.newAgreement.importer = this.validateNewAgreementForm.value.applicant;
      this.newAgreement.exporter = this.validateNewAgreementForm.value.beneficiary;
      this.newAgreement.issuingBank = this.validateNewAgreementForm.value.issuingBank;
      this.newAgreement.advisingBank = this.validateNewAgreementForm.value.advisingBank;
      this.newAgreement.commodity = this.validateNewAgreementForm.value.commodityName;
      this.newAgreement.price = this.validateNewAgreementForm.value.commodityValue;
      this.newAgreement.paymentMethod = this.validateNewAgreementForm.value.paymentMethod;
      // this.newAgreement.deadline = this.validateNewAgreementForm.value.date.toString();
      this.newAgreement.additionalInfo = this.validateNewAgreementForm.value.additionalInformation;
      console.log(this.newAgreement);
      this.agreementSer.create(this.newAgreement).subscribe((res) => {
        if (res.message == 'Create salescontract successfully') {
          this.msg.success('Create salescontract successfully');
        } else this.msg.error('Create salescontract unsuccessfully')
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
      agreementID: '#demo',
      applicant: 'dang',
      applicantLegalName: 'dang',
      beneficiary: ['', [Validators.required]],
      issuingBank: ['', [Validators.required]],
      issuingBankCode: '',
      beneficiaryLegalName: '',
      advisingBank: ['', [Validators.required]],
      advisingBankCode: '',
      commodityName: ['', [Validators.required]],
      commodityValue: [0, [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      additionalInformation: '',
      date: [format(currentDate, 'dd-MM-yyyy')],
      required: false,
    });
  }
}
