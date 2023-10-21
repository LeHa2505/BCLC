import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AgreementService } from 'src/app/service/agreement-service/agreement.service';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-detail-agreement',
  templateUrl: './detail-agreement.component.html',
  styleUrls: ['./detail-agreement.component.less'],
})
export class DetailAgreementComponent {
  requestForm = {
    status: '',
    name: '',
    agreementID: '',
    applicant: '',
    applicantLegalName: '',
    beneficiary: '',
    issuingBank: '',
    issuingBankCode: '',
    advisingBank: '',
    advisingBankCode: '',
    beneficiaryLegalName: '',
    commodityName: '',
    commodityValue: '',
    paymentMethod: '',
    additionalInformation: '',
    date: '',
  };
  confirmModal?: NzModalRef;
  isVisible = false;
  validateForm!: UntypedFormGroup;
  username = localStorage.getItem('username');
  isEdit = false;
  updateAgreement = {
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
    private modal: NzModalService,
    private fb: UntypedFormBuilder,
    private agreementSer: AgreementService,
    private msg: NzMessageService,
    private route: ActivatedRoute
  ) {
    const currentDate = new Date();
    this.validateForm = this.fb.group({
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
    });
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to accept this agreement?',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.agreementSer.approve(this.salescontract_id).subscribe((res) => {
          console.log(res);
        });
      },
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
      Object.values(this.validateForm.controls).forEach((control) => {
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

  salescontract_id: string;
  getDetail() {
    this.salescontract_id = this.route.snapshot.paramMap.get('id');
    this.agreementSer.detail(this.salescontract_id).subscribe((res) => {
      this.requestForm.advisingBank = res.advisingBank;
      this.requestForm.date = res.deadlineInDate;
      this.requestForm.applicant = res.importer;
      this.requestForm.beneficiary = res.exporter;
      this.requestForm.commodityValue = res.price;
      this.requestForm.commodityName = res.commodity;
      this.requestForm.issuingBank = res.issuingBank;
      this.requestForm.paymentMethod = res.paymentMethod;
      this.requestForm.status = res.status;
      console.log(res);
    });
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

  updateForm() {
    this.isEdit = true;
  }

  saveForm() {
    if (this.validateForm.valid) {
      this.updateAgreement.importer = this.validateForm.value.applicant;
      this.updateAgreement.exporter = this.validateForm.value.beneficiary;
      this.updateAgreement.issuingBank = this.validateForm.value.issuingBank;
      this.updateAgreement.advisingBank = this.validateForm.value.advisingBank;
      this.updateAgreement.commodity = this.validateForm.value.commodityName;
      this.updateAgreement.price = this.validateForm.value.commodityValue;
      this.updateAgreement.paymentMethod =
        this.validateForm.value.paymentMethod;
      // this.updateAgreement.deadline = this.validateForm.value.date.toString();
      this.updateAgreement.additionalInfo =
        this.validateForm.value.additionalInformation;
      console.log(this.updateAgreement);
      this.isEdit = false;
      this.agreementSer
        .update(this.updateAgreement, this.salescontract_id)
        .subscribe((res) => {
          this.msg.success(res.message);
        });
        this.getDetail();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit(): void {
    // console.log(this.isEdit);

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDetail();
  }
}
