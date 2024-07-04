import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-cadastro-cores',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbar,
    MatFormFieldModule,
    MatButton,
    MatTableModule,
    MatIcon,
    MatError
  ],
  templateUrl: './cadastro-cores.component.html',
  styleUrl: './cadastro-cores.component.css'
})
export class CadastroCoresComponent {
  colunasTabela = [ 'nome', 'pantone', 'codigoRgb' ];
  dadosDaTabela = [
    { nome: 'Azul', pantone: 'Azul', codigoRgb: '#0000FF' },
    { nome: 'Verde', pantone: 'Verde', codigoRgb: '#00FF00' },
  ];
  conteudoTabela = new MatTableDataSource(this.dadosDaTabela);

  formularioCores = new FormGroup(
    {
      nome: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      pantone: new FormControl(''),
      codigoRgb: new FormControl('', [ Validators.required ]),
    }
  );

  novaArray: any[]= [];
  enviarFormulario(cor : any) {
    if (this.formularioCores.valid) {
      this.novaArray = this.conteudoTabela.data.slice();
      this.novaArray.push( { nome: cor.nome, pantone: cor.pantone, codigoRgb: "#" + cor.codigoRgb } );
      this.conteudoTabela.data = this.novaArray;
    }
  }

  mensagemErro = "O formulário contém erros. Revise as informações."

  mensagemErroNome = '';
  atualizarMensagemErroNome() {
    if (this.formularioCores.get('nome')?.hasError('required')) {
      this.mensagemErroNome="Nome é obrigatório"
    } else if (this.formularioCores.get('nome')?.hasError('minlength')) {
      this.mensagemErroNome="O nome precisa ter no mínimo 3 caracteres"
    } else {
      this.mensagemErroNome=""
    }
  }

  mensagemErroCodigoRgb = '';
  atualizarMensagemErroCodigoRgb() {
    if (this.formularioCores.get('codigoRgb')?.hasError('required')) {
      this.mensagemErroCodigoRgb = "Código RGB é obrigatório"
    } else if (this.formularioCores.get('codigoRgb')?.hasError('pattern')) {
      this.mensagemErroCodigoRgb = "Código RGB deve ter 6 caracteres e só pode ter número e letras de A a F"
    } else {
      this.mensagemErroCodigoRgb = ""
    }
  }
}
