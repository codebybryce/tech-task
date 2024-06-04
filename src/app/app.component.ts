import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCardComponent } from './photo-card/photo-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tech-task';
}
