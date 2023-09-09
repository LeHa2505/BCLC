import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  role: any = 'm';
  isCollapsed = false;
  menus: any[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      url: '',
    },
    {
      title: 'Quản lý đơn hàng',
      icon: 'database',
      subMenus: [
        {
          title: 'Danh sách đơn hàng',
          url: `shipping-order-list`,
        },
        {
          title: 'Tạo đơn hàng',
          url: `shipping-order-list/create`,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
