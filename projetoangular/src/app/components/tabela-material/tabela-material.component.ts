import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabela-material',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabela-material.component.html',
  styleUrl: './tabela-material.component.css'
})
export class TabelaMaterialComponent {
  colunasTabela = [ 'nome', 'sobrenome' ]
  conteudoTabela = [
    { nome: 'Leo', sobrenome: 'Luz' },
    { nome: 'João', sobrenome: 'Silva' }
  ]
}
