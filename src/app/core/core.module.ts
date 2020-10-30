import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';



@NgModule({
  declarations: [HeaderComponent, NavigatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavigatorComponent
  ]
})
export class CoreModule { }
