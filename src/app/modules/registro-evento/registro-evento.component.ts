import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { usuarioEvento } from './registroEvento.model';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.component.html',
  styleUrls: ['./registro-evento.component.scss']
})

export class RegistroEventoComponent {
  dniFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-HJ-NP-TV-Z]$')]);

  nombreFormControl = new FormControl('', Validators.required);

  apellidosFormControl = new FormControl('', Validators.required);

  direccionFormControl = new FormControl('', Validators.required);

  clubRunningFormControl = new FormControl('', Validators.required);

  tallaFormControl = new FormControl('', [Validators.required, Validators.pattern('^(XS|S|M|L|XL)$')]);

  metodoFormControl = new FormControl('', Validators.required);

  matcher = new MyErrorStateMatcher();

  model = new usuarioEvento("12345678X","Ivan","Negron Fernandez","Alli","Corredores","M","Efectivo");

  submitted = false;

  onSubmit() { this.submitted = true; }
}
