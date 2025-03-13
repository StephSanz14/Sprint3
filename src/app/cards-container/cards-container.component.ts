import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-container',
  imports: [CardComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})

/* Cards container es padre de card */
export class CardsContainerComponent {
  @Input () productsContainer: any[]=[];
  @Input () typeChangeContainer:string='';
} 
