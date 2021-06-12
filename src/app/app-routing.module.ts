import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkiraComponent } from './akira/akira.component';

const routes: Routes = [
  {
    path: '',
    component: AkiraComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
