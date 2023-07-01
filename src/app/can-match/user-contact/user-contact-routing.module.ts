import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContactComponent } from './user-contact.component';

const routes: Routes = [
  {
    path: '',
    component: UserContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserContactRoutingModule {}
