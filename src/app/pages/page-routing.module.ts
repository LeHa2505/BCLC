import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgreementComponent } from './user/new-agreement/new-agreement.component';
import { RequestLCComponent } from './user/request-lc/request-lc.component';
import { Option1Component } from './user/option1/option1.component';
import { ManageTransactionsComponent } from './user/manage-transactions/manage-transactions.component';
import { ListNewRequestComponent } from './user/manage-agreements/list-new-request/list-new-request.component';
import { DetailAgreementComponent } from './user/manage-agreements/detail-agreement/detail-agreement.component';
import { ListRequestLcComponent } from './bank/list-request-lc/list-request-lc.component';

const routes: Routes = [
  {
    path: '',
    component: NewAgreementComponent,
  },
  {
    path: 'request-lc',
    component: RequestLCComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'option1', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: Option1Component,
      },
      // Thêm các route con cho trang layout chung ở đây
    ],
  },
  {
    path: 'agreements',
    children: [
      {
        path: 'list-new-request', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: ListNewRequestComponent,
      },
      {
        path: ':id', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: DetailAgreementComponent,
      },
      // Thêm các route con cho trang layout chung ở đây
    ],
  },
  {
    path: 'manage-transactions',
    component: ManageTransactionsComponent,
  },
  {
    path: 'bank',
    children: [
      {
        path: 'list-request-lc', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: ListRequestLcComponent,
      },
      // Thêm các route con cho trang layout chung ở đây
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
