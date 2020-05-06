/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesMenu } from './pages-menu';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { NbMenuModule, NbCalendarModule, NbCheckboxModule, NbCardModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { CalotteryComponent } from './calottery/calottery.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCalendarModule,
    NbCheckboxModule,
    NbCardModule,
    NgxDatatableModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CalotteryComponent,
  ],
  providers: [
    PagesMenu,
  ],
})
export class PagesModule {
}
