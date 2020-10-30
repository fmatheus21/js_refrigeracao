import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { ServiceComponent } from './service/service.component';




@NgModule({
  declarations: [SliderComponent, AboutComponent, FeatureComponent, ServiceComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,   
    AboutComponent,
    FeatureComponent,
    ServiceComponent
  ]
})
export class PublicModule { }
