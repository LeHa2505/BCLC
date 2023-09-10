import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.less'],
})
export class LayoutUserComponent implements OnInit {
  role: any = 'user';
  isCollapsed = false;
  menus: any[] = [
    {
      title: 'New agreement',
      icon: 'file-add',
      url: '',
      role: 'user',
    },
    {
      title: 'Manage agreements',
      icon: 'database',
      url: 'manage-agreements',
      role: 'user',
    },
    {
      title: 'Request LC',
      icon: 'audit',
      url: 'request-lc',
      role: 'user',
    },
    {
      title: 'Manage documents',
      icon: 'file-done',
      subMenus: [
        {
          title: 'option1',
          url: `option1`,
        },
        {
          title: 'option2',
          url: `#`,
        },
      ],
      role: 'user',
    },
    {
      title: 'Manage transactions',
      icon: 'euro',
      url: 'manage-transactions',
      role: 'user',
    },
  ];

  breadcrumbs: string[] = [];
  url: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Theo dõi sự kiện thay đổi URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Lấy URL hiện tại
        this.url = this.router.url;
        console.log(this.url);

        // Tạo breadcrumbs từ URL
        this.breadcrumbs = this.createBreadcrumbs(this.url);
      }
    });
  }

  ngOnInit(): void {
    // Lấy breadcrumbs cho URL ban đầu
    const initialUrl = this.router.url;
    this.breadcrumbs = this.createBreadcrumbs(initialUrl);
  }

  private createBreadcrumbs(url: string): string[] {
    // Loại bỏ ký tự "/" ở đầu và chia URL thành các phần tử
    const parts = url.split('/').filter((part) => part !== '');

    // Dựa trên các phần tử URL, tạo mảng breadcrumbs
    const breadcrumbs = [];
    let currentUrl = ''; // Breadcrumb gốc

    for (const part of parts) {
      currentUrl += `${part}`;
      breadcrumbs.push(this.getMenuTitle(currentUrl));
      console.log(this.getMenuTitle(currentUrl));
    }
    return breadcrumbs;
  }
  getMenuTitle(url: string): string {
    const menuItem = this.menus.find((item) => item.url === url);
    return menuItem ? menuItem.title : url;
  }
  getMenuUrl(title: string): string {
    const menuItem = this.menus.find((item) => item.title === title);
    return menuItem ? menuItem.url : title;
  }
}
