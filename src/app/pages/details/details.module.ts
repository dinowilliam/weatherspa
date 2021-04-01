import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({ 
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path:'', component: DetailsPage, canActivate: [DetailsGuard] }]),
  ],
  declarations: [
    DetailsPage,
  ],
  providers: [
    DetailsGuard
  ]
})

export class DetailsModule { }
