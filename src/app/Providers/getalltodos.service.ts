import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetalltodosService {
  url;
  constructor(public http: HttpClient) {
    this.url = 'http://127.0.0.1:8081/api/ng/get/todos';
    console.log('Getting Todos...');
  }

  getAllTodos() {
    return this.http.get(this.url);
  }
}
