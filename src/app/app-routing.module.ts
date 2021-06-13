import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkiraComponent } from './akira/akira.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: AkiraComponent
  },
  {
    path: 'jetniphan',
    component: InfoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
