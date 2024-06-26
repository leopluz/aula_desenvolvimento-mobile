import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  standalone: true,
  imports: [],
  templateUrl: './exemplos.component.html',
  styleUrl: './exemplos.component.css'
})
export class ExemplosComponent {
  @Input() title = 'projetoangular';
  
  imagem = 'https://fakeimg.pl/100x100';
  numeros = [
    {id:0, valor:1},
    {id:1, valor:5},
    {id:2, valor:-8}
  ]

  estiloContador = 'contador';
  destacar() {
    this.estiloContador = 'destaque';
  }
  desfazerDestaque() {
    this.estiloContador = 'contador';
  }

  contador = 0;
  acao() {
    this.contador++;
  }

}
