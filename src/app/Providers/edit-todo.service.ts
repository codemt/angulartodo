import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditTodoService {
  url;
  constructor(public http: HttpClient) {

    this.url = `http://127.0.0.1:8000/api/ng/store/todo/edit/`;
    console.log('Editing Todos...');
  }

  editTodo(id: any) {
    console.log('id is ', id);
    this.url = `http://127.0.0.1:8000/api/ng/store/todo/edit/` + id;

    console.log(this.url);
    return this.http.get(this.url);
  }
}
