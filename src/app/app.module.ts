import { NgParticlesModule } from "ng-particles";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';



import { AkiraComponent } from './akira/akira.component';
import { InfoComponent } from './info/info.component';
import { MatListModule } from '@angular/material/list';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [
    AppComponent,
    AkiraComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatListModule,
    NgParticlesModule,
    MatToolbarModule,
    MatMenuModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
