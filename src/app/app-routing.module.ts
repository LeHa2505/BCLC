import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingOrderListComponent } from './pages/shipping-order-list/shipping-order-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/page.module').then((m) => m.DashboardModule),
  },
  {
    path: 'shipping-order-list',
    loadChildren: () =>
      import('./pages/shipping-order-list/shipping-order-list.module').then((m) => m.ShippingOrderListModule),
    // component: ShippingOrderListComponent
  },
 

  {
    path: 'exception',
    loadChildren: () =>
      import('./shared/exception/exception.module').then(
        (m) => m.ExceptionModule
      ),
  },
  { path: '**', redirectTo: '/exception/403' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
