import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GuidelinesPage } from '../pages/guidelines/guidelines';
import { MonitorPage } from '../pages/monitor/monitor';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GeneralInformationPage } from '../pages/general-information/general-information';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuidelinesPage,
    MonitorPage,
    TabsControllerPage,
    GeneralInformationPage,
    ContactUsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuidelinesPage,
    MonitorPage,
    TabsControllerPage,
    GeneralInformationPage,
    ContactUsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}