import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  environment
} from '../environments/environment';
import {
  AngularFireModule
} from '@angular/fire/compat/';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  FlashMessagesModule
} from 'flash-messages-angular';
import {
  FormsModule
} from '@angular/forms';


import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  HeaderComponent
} from './components/header/header.component';
import {
  BoardComponent
} from './components/board/board.component';
import {
  ClientsComponent
} from './components/clients/clients.component';
import {
  EditClientComponent
} from './components/edit-client/edit-client.component';
import {
  LoginComponent
} from './components/login/login.component';
import {
  RegisterComponent
} from './components/register/register.component';
import {
  SettingsComponent
} from './components/settings/settings.component';
import {
  NotFoundComponent
} from './components/not-found/not-found.component';
import {
  FooterComponent
} from './components/footer/footer.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  ClientService
} from './services/client.service';
import {
  LoginService
} from './services/login.service';
import {
  AuthGuard
} from './guardians/auth.guard';
import {
  SettingsService
} from './services/settings.service';
import {
  SettingsGuard
} from './guardians/settings.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ClientsComponent,
    EditClientComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    //AngularFirestoreModule,
    //AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClientService, LoginService, AuthGuard, SettingsService, SettingsGuard, {
    provide: FirestoreSettingsToken,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
