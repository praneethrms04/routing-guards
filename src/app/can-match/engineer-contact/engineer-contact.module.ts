import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerContactRoutingModule } from './engineer-contact-routing.module';
import { EngineerContactComponent } from './engineer-contact.component';


@NgModule({
  declarations: [
    EngineerContactComponent
  ],
  imports: [
    CommonModule,
    EngineerContactRoutingModule
  ]
})
export class EngineerContactModule { }
