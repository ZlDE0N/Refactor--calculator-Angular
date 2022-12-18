import { Component, EventEmitter, Output } from '@angular/core';
import { catchError} from 'rxjs';

@Component({
  selector: 'app-cuerpo-calc',
  templateUrl: './cuerpo-calc.component.html',
  styleUrls: ['./cuerpo-calc.component.css']
})
export class CuerpoCalcComponent {
  //Properties
  texto: string = '0';
  esCorto: boolean = true;
  screenValue = '';
  result = '';



  // Borrar Screen
  clean() {
    this.screenValue = ''; 
    // console.log('Borrando Screen')
  }

  // Borrar numero individualmente
  erase(): void{
  this.screenValue = this.screenValue.slice(0, -1); 
  }

  //Agregar Texto Al Screen 
  agregarTexto(texto: string){
    this.screenValue += texto;
  }

  //Equal button (Operation Button)
  equal(): void {
    this.result = (eval(this.screenValue)).toString();
    try {
      if (this.result === 'Infinity') {
      this.screenValue = 'Error';
      } else {
        //this.historic.push({count: this.screenValue, result: this.result}); //This line is for history
        this.screenValue = this.result;
      }
    } catch(Error) {
      this.clean();
      alert('Ha ocurrido un error: ' + Error);
    }
  }   

}


