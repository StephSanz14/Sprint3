import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 

export class AppComponent {
  title = 'pruebasSprint3';
}
