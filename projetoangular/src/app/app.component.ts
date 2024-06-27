import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { LivroComponent } from './components/livro/livro.component';
import { Capitulo } from './models/capitulo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExemplosComponent,LivroComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
}
