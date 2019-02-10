import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditTodoService {
  url;
  constructor(public http: HttpClient) {
    console.log('Getting Todos...');
  }

  editTodo(id: any) {
    console.log('id is ', id);
    this.url = `http://127.0.0.1:8000/api/ng/store/todo/edit/{$id}`;
    return this.http.get(this.url);
  }
}
