import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgreementComponent } from './new-agreement/new-agreement.component';
import { ManageAgreementsComponent } from './manage-agreements/manage-agreements.component';
import { RequestLCComponent } from './request-lc/request-lc.component';
import { Option1Component } from './option1/option1.component';
import { ManageTransactionsComponent } from './manage-transactions/manage-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: NewAgreementComponent,
  },
  {
    path: 'manage-agreements',
    component: ManageAgreementsComponent
  },
  {
    path: 'request-lc',
    component: RequestLCComponent
  },
  {
    path: '',
    children: [
      {
        path: 'option1', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        component: Option1Component
      },
      // Thêm các route con cho trang layout chung ở đây
    ],
  },
  {
    path: 'manage-transactions',
    component: ManageTransactionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
