import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-cadastro-cores',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatToolbar,
    MatFormFieldModule,
    MatButton,
    MatTableModule,
    MatIcon
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
      nome: new FormControl('', Validators.required),
      pantone: new FormControl(''),
      codigoRgb: new FormControl('', [ Validators.required ]),
    }
  );

  novaArray: any[]= [];
  enviarFormulario(cor : any) {
    this.novaArray = this.conteudoTabela.data.slice();
    this.novaArray.push( { nome: cor.nome, pantone: cor.pantone, codigoRgb: "#" + cor.codigoRgb } );
    this.conteudoTabela.data = this.novaArray;
  }

  mensagemErro = "O formulário contém erros. Revise as informações."

}
