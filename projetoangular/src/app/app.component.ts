import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { LivroComponent } from './components/livro/livro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExemplosComponent,LivroComponent,RouterOutlet,RouterLink],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
}
