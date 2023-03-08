import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistroEventoComponent } from './modules/registro-evento/registro-evento.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent  },
      { path: 'main', component: HomeComponent  },
      { path: 'registroEvento', component: RegistroEventoComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
