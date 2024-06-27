import { Component, Input } from '@angular/core';
import { Capitulo } from '../../models/capitulo';
import { CapituloComponent } from '../capitulo/capitulo.component';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CapituloComponent],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  titulo = "Livro Desruptivo";
  autor = "Fulano de Tal";
  capitulos: Capitulo[] = [
    { numero: 1, titulo: "Introdução", conteudo: "Nam vel velit malesuada, scelerisque quam vel, lobortis sem. Nulla facilisi. Nulla ornare nec velit ac sodales. Nunc tincidunt auctor dui ac molestie. Praesent eget diam  leo condimentum pretium. Nullam felis enim, volutpat sed pharetra a, viverra in ex. Aliquam eleifend molestie leo nec porttitor. Nullam sit amet quam blandit, consectetur sapien sit amet, ornare tellus. Nam odio felis, rhoncus sit amet tempus quis, blandit lacinia nibh. Morbi interdum urna arcu, rhoncus maximus sem congue . Cras dapibus tristique orci id iaculis. Cras ac vulputate justo. Proin tincidunt sapien sed interdum maximus." },
    { numero: 2, titulo: "Desenvolvimento", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet ultricies luctus. Nulla tortor sem, consectetur molestie elementum in, sagittis id leo. Maecenas elementum euismod tortor. Integer ullamcorper feugiat velit, at tincidunt libero facilisis ac. Nullam ut bibendum enim, fermentum ornare erat. Phasellus luctus sollicitudin aliquam. Etiam suscipit imperdiet quam, ac posuere neque vestibulum eget. Nullam  mi id urna ultricies sodales quis et mi. Vestibulum maximus pharetra justo, sed interdum nulla luctus sed. Ut nec ante eros. Fusce lorem augue, imperdiet id scelerisque , consequat eget nisl. Aenean enim mauris, dictum at lorem sed, scelerisque euismod magna. Fusce lacus nulla, scelerisque id quam at, molestie sagittis massa. Pellentesque et sagittis arcu.Donec malesuada finibus tortor, vel auctor dui mollis vitae. Aliquam placerat, risus vel eleifend auctor, nunc nibh ultricies metus, ut facilisis urna diam ac arcu. Nullam vitae laoreet urna. Ut dapibus mauris sit amet augue sagittis aliquam. Ut volutpat dolor elementum condimentum rutrum. Maecenas quis tempus libero. Etiam vel velit erat. Morbi  nunc sed nibh ullamcorper scelerisque commodo  elit. Cras sit amet tellus venenatis lorem suscipit ornare sit amet in tortor. Phasellus ullamcorper orci ut velit gravida, ut mollis dui molestie. Vivamus ullamcorper sapien id arcu auctor pretium. Cras fringilla diam vitae turpis cursus hendrerit. Sed id mi dui. Fusce hendrerit mi ut convallis vulputate. Sed aliquam sit amet quam quis lacinia. Aliquam luctus, urna cursus posuere venenatis, mauris dui malesuada odio, nec ultrices enim massa imperdiet lectus. Aliquam velit quam, dictum sed metus sed, vulputate viverra sem. Duis viverra rhoncus ultrices. Aenean ultricies pharetra augue vel varius. Nunc in cursus ligula. Ut auctor volutpat erat sed scelerisque. Nam vel velit malesuada, scelerisque quam vel, lobortis sem. Nulla facilisi. Nulla ornare nec velit ac sodales. Nunc tincidunt auctor dui ac molestie. Praesent eget diam  leo condimentum pretium. Nullam felis enim, volutpat sed pharetra a, viverra in ex. Aliquam eleifend molestie leo nec porttitor. Nullam sit amet quam blandit, consectetur sapien sit amet, ornare tellus. Nam odio felis, rhoncus sit amet tempus quis, blandit lacinia nibh. Morbi interdum urna arcu, rhoncus maximus sem congue . Cras dapibus tristique orci id iaculis. Cras ac vulputate justo. Proin tincidunt sapien sed interdum maximus. Phasellus venenatis felis in nibh tristique, eu malesuada libero accumsan. Fusce dictum quis elit ut elementum. Ut aliquet euismod sem, at volutpat urna cursus ac. In ac felis lorem. Fusce ullamcorper elit ac orci sodales interdum. Nullam vulputate purus in accumsan efficitur. Nunc at tempus felis, id mollis eros. In sit amet sollicitudin ante." },
    { numero: 3, titulo: "Conclusão", conteudo: "Morbi  nunc sed nibh ullamcorper scelerisque commodo  elit. Cras sit amet tellus venenatis lorem suscipit ornare sit amet in tortor. Phasellus ullamcorper orci ut velit gravida, ut mollis dui molestie. Vivamus ullamcorper sapien id arcu auctor pretium. Cras fringilla diam vitae turpis cursus hendrerit. Sed id mi dui. Fusce hendrerit mi ut convallis vulputate. Sed aliquam sit amet quam quis lacinia. Aliquam luctus, urna cursus posuere venenatis, mauris dui malesuada odio, nec ultrices enim massa imperdiet lectus. Aliquam velit quam, dictum sed metus sed, vulputate viverra sem. Duis viverra rhoncus ultrices. Aenean ultricies pharetra augue vel varius. Nunc in cursus ligula. Ut auctor volutpat erat sed scelerisque." },
  ];

  contadorLikesLivro = 0;
  incrementarLikesCapitulos(contador:number) {
    this.contadorLikesLivro++;
    console.log("Contador: " + contador)
  }
}
