/*
  Servicio que sera compartido entre diferentes componentes, para que unos escuchen y otros emitan eventos
*/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private eventSubject = new Subject<string>;

  color:string = '';

  constructor() { }

  emitEvent(event: string){
    this.eventSubject.next(event);
  }

  getEvent(){
    return this.eventSubject.asObservable();
  }
}
