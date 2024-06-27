import { Component, Input } from '@angular/core';
import { Capitulo } from '../../models/capitulo';

@Component({
  selector: 'app-capitulo',
  standalone: true,
  imports: [],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css'
})
export class CapituloComponent {
  @Input() numero = '0';
  @Input() titulo = 'Vazio';
}
