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
import { LastTabPage } from '../pages/last-tab/last-tab'
import { TodoProvider } from '../providers/todo/todo';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { AddingPage } from '../pages/adding/adding'

import { HttpClientModule } from '@angular/common/http';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {ListuserEffects} from '../redux/effect/userEffect';
import {BigReducer} from '../redux/big-reducer';

import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LastTabPage,
    //AddingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //BrowserAnimationsModule
    HttpClientModule,
    EffectsModule.forRoot([ListuserEffects]),
    StoreModule.forRoot(BigReducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LastTabPage,
    //AddingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    Vibration
  ]
})
export class AppModule {}
