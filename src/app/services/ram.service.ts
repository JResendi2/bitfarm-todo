import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RamService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character?page=1');
  }

  getOne(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}

