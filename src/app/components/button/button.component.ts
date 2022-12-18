import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() texto: string = '0';
  @Input() esCorto: boolean = true;

  @Output() accion: EventEmitter<string> = new EventEmitter<string>();
  
  onClick(){
    this.accion.emit(this.texto);
  }
}
