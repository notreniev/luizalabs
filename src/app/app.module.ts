import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/providers/data.service';
import { HttpClientModule } from '@angular/common/http';
import { IConfig, NgxMaskIonicModule } from 'ngx-mask-ionic';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, NgxMaskIonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
