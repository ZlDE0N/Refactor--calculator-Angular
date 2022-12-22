import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historic: {count: string, result: string}[] = [];

  constructor() { }
}

export class HistoricObject {
  count: string = '';
  result: string = '';
}
