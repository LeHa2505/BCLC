import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutUserComponent } from './pages/layout-user/layout-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      {
        path: '', // Đường dẫn trống để đảm bảo đây là trang mặc định của layout chung
        loadChildren: () =>
          import('./pages/user/page.module').then((m) => m.PagesModule),
      },
      // Thêm các route con cho trang layout chung ở đây
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
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
