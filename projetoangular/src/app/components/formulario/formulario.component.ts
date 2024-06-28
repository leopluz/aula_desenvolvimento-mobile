import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome = "";

  mostrarNome() {
    alert(this.nome);
  }

  formularioPerfil = new FormGroup(
    {
      nomeCompleto: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ])
    }
  );
  enviarFormulario() {
    alert( 
      "Nome Completo: " 
      + this.formularioPerfil.value.nomeCompleto 
      + "\nE-mail: "
      + this.formularioPerfil.value.email
    );
  }

}
