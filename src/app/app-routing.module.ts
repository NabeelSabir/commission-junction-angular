import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { PromoCodeComponent } from './components/dashboard/promo-code/promo-code.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'promoCode', component: PromoCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
