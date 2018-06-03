import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PublishMetaPage} from "../pages/publish-meta/publish-meta";
import { MetaProvider } from '../providers/meta/meta';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RequestProvider } from '../providers/request/request';
import {RequestDataPage} from "../pages/request-data/request-data";
import {CreateAccountPage} from "../pages/create-account/create-account";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishMetaPage,
    RequestDataPage,
    CreateAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishMetaPage,
    RequestDataPage,
    CreateAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    MetaProvider,
    RequestProvider
  ]
})
export class AppModule {}
