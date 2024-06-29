import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
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
    MatFormField,
    MatButton,
    MatTableModule
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
      pantone: new FormControl('', [ Validators.required ]),
      codigoRgb: new FormControl('', [ Validators.required ]),
    }
  );

  enviarFormulario(cor : any) {
    this.conteudoTabela.data.push( { nome: cor.nome, pantone: cor.pantone, codigoRgb: cor.codigoRgb } );
    this.conteudoTabela.data = this.conteudoTabela.data;
  }

}
