import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShippingOrderComponent } from './create-shipping-order/create-shipping-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShippingOrderListComponent } from './shipping-order-list/shipping-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'shipping-order-list',
    component: ShippingOrderListComponent,
  },
  {
    path: 'create-shipping-order',
    component: CreateShippingOrderComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
