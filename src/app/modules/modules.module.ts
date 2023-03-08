import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    RegistroEventoComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class ModulesModule {}
