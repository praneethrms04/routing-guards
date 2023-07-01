import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerContactComponent } from './engineer-contact.component';

const routes: Routes = [
  {
    path: '',
    component: EngineerContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerContactRoutingModule {}
