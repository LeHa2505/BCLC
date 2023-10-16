import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-new-request',
  templateUrl: './list-new-request.component.html',
  styleUrls: ['./list-new-request.component.less']
})
export class ListNewRequestComponent {
  listOfData = [
    {
      id: 1,
      commodity: '1',
      value: 'John Brown',
      applicant: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      id: 2,
      commodity: '1',
      value: 'John Brown',
      applicant: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      id: 3,
      commodity: '1',
      value: 'John Brown',
      applicant: 32,
      address: 'New York No. 1 Lake Park'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  detail(id: number) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Bây giờ bạn có thể sử dụng biến 'id' trong component của bạn.
    });
  }
}
