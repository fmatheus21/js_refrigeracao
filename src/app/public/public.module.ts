import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { ServiceComponent } from './service/service.component';
import { EstimateComponent } from './estimate/estimate.component';
import { NumberComponent } from './number/number.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    SliderComponent,
    AboutComponent,
    FeatureComponent,
    ServiceComponent,
    EstimateComponent,
    NumberComponent,
    GalleryComponent,
    ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    AboutComponent,
    FeatureComponent,
    ServiceComponent,
    EstimateComponent,
    NumberComponent,
    GalleryComponent,
    ContactComponent
  ]
})
export class PublicModule { }
