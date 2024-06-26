import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemplosComponent } from './exemplos/exemplos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExemplosComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
}
