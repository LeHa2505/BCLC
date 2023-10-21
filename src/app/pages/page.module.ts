import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { PageRoutingModule } from './page-routing.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NzCardModule } from 'ng-zorro-antd/card';
import { IconsProviderModule } from '../icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutUserComponent } from './layout-user/layout-user.component';
import { LoginComponent } from '../authentication/login/login.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NewAgreementComponent } from './user/manage-agreements/new-agreement/new-agreement.component';
import { RequestLCComponent } from './user/manage-lcs/request-lc/request-lc.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Option1Component } from './user/option1/option1.component';
import { ManageTransactionsComponent } from './user/manage-transactions/manage-transactions.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ListNewRequestComponent } from './user/manage-agreements/list-new-request/list-new-request.component';
import { DetailAgreementComponent } from './user/manage-agreements/detail-agreement/detail-agreement.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ListAgreementComponent } from './user/manage-agreements/list-agreement/list-agreement.component';
import { ListLCsComponent } from './user/manage-lcs/list-lcs/list-lcs.component';
import { ListLcComponent } from './bank/manage-lcs/list-lc/list-lc.component';


@NgModule({
  declarations: [LoginComponent, LayoutUserComponent, NewAgreementComponent, RequestLCComponent, Option1Component, ManageTransactionsComponent, ListNewRequestComponent, DetailAgreementComponent, ListAgreementComponent, ListLCsComponent, ListLcComponent],
  imports: [
    NzUploadModule,
    NzRadioModule,
    NzBreadCrumbModule,
    NzMenuModule,
    CommonModule,
    PageRoutingModule,
    NzTableModule,
    NzDividerModule,
    ComponentsModule,
    HttpClientModule,
    NgChartsModule,
    NzCardModule,
    IconsProviderModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    HttpClientModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzLayoutModule,
    ScrollingModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    NzMessageModule
  ],
})
export class PagesModule {}