import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromoCodeComponent } from './promo-code/promo-code.component';

@NgModule({
  declarations: [DashboardComponent, TopNavbarComponent, SideNavbarComponent, PromoCodeComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
