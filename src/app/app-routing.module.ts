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
    path: 'aboutme',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
