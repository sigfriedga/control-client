import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  BoardComponent
} from './components/board/board.component';
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
  EditClientComponent
} from './components/edit-client/edit-client.component';
import {
  NotFoundComponent
} from './components/not-found/not-found.component';
import {
  AuthGuard
} from './guardians/auth.guard';
import {
  SettingsGuard
} from './guardians/settings.guard';

const routes: Routes = [{
    path: '',
    component: BoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrer',
    component: RegisterComponent,
    canActivate: [SettingsGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'client/edit/:id',
    component: EditClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrer',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
