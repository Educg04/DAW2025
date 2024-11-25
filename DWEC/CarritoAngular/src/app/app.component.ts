import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from "./components/primer-componente/primer-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarroCompraAngular';
}