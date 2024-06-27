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
  @Input() titulo = "Título";
  @Input() autor = "Autor";
  @Input() capitulos : Capitulo[] = [];
}
