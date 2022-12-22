import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistorialService, HistoricObject } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  constructor(private modalService: NgbModal,  public router: Router, public historialService: HistorialService){}

  // Traer la informacion almacenada en el servicio
  get historic():HistoricObject[]{
    return this.historialService.historic;
  }

  navegar(){
    this.router.navigate(['calc']); //El navigate toma un array como argumento
  }

  open(content:any): void {
    this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
  }

}
