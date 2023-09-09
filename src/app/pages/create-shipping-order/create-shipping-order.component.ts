import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';



@Component({
  selector: 'app-create-shipping-order',
  templateUrl: './create-shipping-order.component.html',
  styleUrls: ['./create-shipping-order.component.less']
})
export class CreateShippingOrderComponent {
  constructor(private fb: UntypedFormBuilder) {}

  validateForm!: UntypedFormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;
  resetForm(): void {
    this.validateForm.reset();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new UntypedFormControl());
    }
  }
  
}
