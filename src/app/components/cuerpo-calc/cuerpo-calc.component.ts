import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError} from 'rxjs';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-cuerpo-calc',
  templateUrl: './cuerpo-calc.component.html',
  styleUrls: ['./cuerpo-calc.component.css']
})
export class CuerpoCalcComponent {
  //Properties
  //Ocupamos las propiedades de abajo antes de usar el esquema de json
  // texto: string = '0';
  // esCorto: boolean = true;
  modelo: Array<{texto:string,esCorto:boolean}[]> = [
    [{texto: '7', esCorto: true},{texto: '8', esCorto: true},{texto:'9', esCorto: true},{texto: '*', esCorto:true}],
    [{texto: '4', esCorto: true},{texto: '5', esCorto: true},{texto: '6', esCorto: true},{texto: '-', esCorto: true}],
    [{texto: '1', esCorto: true},{texto: '2', esCorto: true},{texto: '3', esCorto: true},{texto: '+', esCorto: true}],
    [{texto: '(', esCorto: true},{texto: ')', esCorto: true},{texto: '0', esCorto: true},{texto: '/', esCorto: true}],
    [{texto: '.', esCorto: false},{texto: '=', esCorto: false}]
  ];
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


  //Equal button (Operation Button)
  equal(): void {
    this.result = (eval(this.screenValue)).toString();
    try {
      if (this.result === 'Infinity') {
      this.screenValue = 'Error';
      } else {
        this.historic.push({count:this.screenValue, result:this.result}); //This line is for history
        this.screenValue = this.result;
      }
    } catch(Error) {
      this.clean();
      alert('Ha ocurrido un error: ' + Error);
    }
  }
  
  nuevoMetodo(valor: string): void{
    switch (valor) {
      case 'C':
        this.clean();
        break;
      case '=':
        this.equal();
        break;
        default:
          this.screenValue += valor;
        break;
    }
  }

  constructor(private modalService: NgbModal, private router: Router, public historialService: HistorialService) {}

  get historic():object[] {
    return this.historialService.historic;
  }

  navegar(){
    this.router.navigate(['historial'])
  }
}


