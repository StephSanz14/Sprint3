import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  /* Declaramos variables */
  @Output () typeChange=new EventEmitter<string>();
    fnSelect(selected:string){
      this.typeChange.emit(selected);
    }
}
 