import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgreementComponent } from './user/manage-agreements/new-agreement/new-agreement.component';
import { RequestLCComponent } from './user/manage-lcs/request-lc/request-lc.component';
import { Option1Component } from './user/option1/option1.component';
import { ManageTransactionsComponent } from './user/manage-transactions/manage-transactions.component';
import { ListNewRequestComponent } from './user/manage-agreements/list-new-request/list-new-request.component';
import { DetailAgreementComponent } from './user/manage-agreements/detail-agreement/detail-agreement.component';
import { ListAgreementComponent } from './user/manage-agreements/list-agreement/list-agreement.component';
import { ListLCsComponent } from './user/manage-lcs/list-lcs/list-lcs.component';
import { ListLcComponent } from './bank/manage-lcs/list-lc/list-lc.component';

const routes: Routes = [
  {
    path: '',
    component: NewAgreementComponent,
  },
  {
    path:'request-lc/:id',
    component: RequestLCComponent
  },
  {
    path: 'agreements',
    children: [
      {
        path: '',
        component: ListAgreementComponent,
      },
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
    path: '',
    children: [
      {
        path: 'LCs',
        component: ListLCsComponent,
      },
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
        path: 'LCs', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: ListLcComponent
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
