import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/indexpage/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SocialLoginModule, AuthServiceConfig,GoogleLoginProvider} from 'angular5-social-login';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularWebStorageModule } from 'angular-web-storage';
import { HomeComponent } from './components/home/home.component';
import { IndexnavigationComponent } from './components/indexnavigation/indexnavigation.component';
import {NgbdModalContent } from './components/indexnavigation/indexnavigation.component';
import { startsWithPipe } from './customstart.pipes';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SkillPieComponent } from './components/skill-pie/skill-pie.component';
import { ManagerPieComponent } from './components/manager-pie/manager-pie.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { OnboardeeComponent } from './components/onboardee/onboardee.component';
const config=new AuthServiceConfig([
  {
     id:GoogleLoginProvider.PROVIDER_ID,
     //provider: new GoogleLoginProvider('461123909427-jm7brsvd2fijajbeq9btm44259biegjl.apps.googleusercontent.com') 
     provider: new GoogleLoginProvider('237169043532-d0koc7i495h2bt1rgtn61u4svds2d5kh.apps.googleusercontent.com') 
  }
  ]);
  export function provideConfig(){
    
    return config;
  }
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    NgbdModalContent,
    HomeComponent,
    IndexnavigationComponent,
    startsWithPipe,
    NotfoundComponent,
    ChatbotComponent,
    ProfileComponent,
    AnalyticsComponent,
    SkillPieComponent,
    ManagerPieComponent,
    SkillBarComponent,
    OnboardeeComponent
    ],
      entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    
  ],
  providers: [
    {
      provide:AuthServiceConfig, 
      useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
