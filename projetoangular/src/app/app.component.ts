import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconButton,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
}
