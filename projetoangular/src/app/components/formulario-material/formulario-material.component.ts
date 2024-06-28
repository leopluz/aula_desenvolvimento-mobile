import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-formulario-material',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatToolbar
  ],
  templateUrl: './formulario-material.component.html',
  styleUrl: './formulario-material.component.css'
})
export class FormularioMaterialComponent {
  formularioPerfil = new FormGroup(
    {
      nomeCompleto: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ])
    }
  );

  enviarFormulario() {
    alert('Enviou formulário');
  }

  get nomeCompleto() {
    return this.formularioPerfil.get('nomeCompleto');
  }
  get email() {
    return this.formularioPerfil.get('email');
  }
}
