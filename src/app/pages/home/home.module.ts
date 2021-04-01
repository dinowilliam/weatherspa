import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { homeReducer } from './state/home.reducer';
import { HomePage } from './container/home/home.page';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@NgModule({  
  imports: [
    CommonModule, 
    ReactiveFormsModule,    
    ComponentsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),   
  ],
  exports:[
    CurrentWeatherComponent,
  ],
  declarations: [HomePage, CurrentWeatherComponent],
})
export class HomeModule { }
