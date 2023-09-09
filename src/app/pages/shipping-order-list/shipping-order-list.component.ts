import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ApiService } from 'src/app/service/api.service';
import { OrderListService } from 'src/app/service/order-list.service';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

interface Order {
  id: any;
  createdAt: any;
  updateAt: any;
  statusCode: number;
  statusDetail: any;
  statusDesc: any;
  orderCode: any;
}

interface Response {
  result: any;
  data: any[];
}

@Component({
  selector: 'app-shipping-order-list',
  templateUrl: './shipping-order-list.component.html',
  styleUrls: ['./shipping-order-list.component.less']
})
export class ShippingOrderListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  size: NzButtonSize = 'large';

  listOfDatas: Order[] = [
    {
      "id": "1",
      "createdAt": "2022-05-26 15:35:21",
      "updateAt": "2022-11-29 10:06:03",
      "statusCode": 1,
      "statusDesc": "chưa giao hàng",
      "statusDetail": "",
      "orderCode": "OD123",
    },
    {
      "id": "2",
      "createdAt": "2022-07-06 20:12:37",
      "updateAt": "2022-11-29 09:07:22",
      "statusCode": 2,
      "statusDesc": "đang giao hàng",
      "statusDetail": "đơn hàng đã đến Bưu điện Cầu Giấy",
      "orderCode": "OD124",
    },
  ];

  res : Response;
  listOfData : Order[];

  constructor(private orderListService: OrderListService, private fb: UntypedFormBuilder) {
    this.orderListService.getArray().subscribe((d) => {
      console.log(d);
      this.res = d;
      this.listOfData = this.res.data;
    });
  }
  
  // ngOnInit(): void {
  //   //Called after the consstructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.orderListService.get().subscribe((listOfData) => {
  //     // we received our posts!
  //     console.log(listOfData);
  //   });
  // }
  validateForm!: UntypedFormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  // ngOnInit(): void {
  //   this.validateForm = this.fb.group({});
  //   for (let i = 0; i < 10; i++) {
  //     this.controlArray.push({ index: i, show: i < 6 });
  //     this.validateForm.addControl(`field${i}`, new UntypedFormControl());
  //   }
  // }
}

