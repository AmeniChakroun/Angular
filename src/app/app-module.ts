import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './layaout/header/header';
import { Footer } from './layaout/footer/footer';
import { Home } from './layaout/home/home';
import { Notfound } from './layaout/notfound/notfound';
import { ListEvent } from './layaout/list-event/list-event';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module';
import { ContainsPipe } from './shared/pipes/contains-pipe';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Notfound,
    ListEvent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
