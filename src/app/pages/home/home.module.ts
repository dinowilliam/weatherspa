import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { homeReducer } from './state/home.reducer';
import { HomePage } from './home.page';
import { HomeEffects } from './state/home.effects';



@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
