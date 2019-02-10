import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PostTodoService {
  url: any;

  constructor(public http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/ng/store/todo';
    console.log('Getting Todos...');
  }

  getAllTodos(f: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };

    console.log(f);
    return this.http.post(this.url, JSON.stringify(f), httpOptions)
          .subscribe( response => {

              console.log(response);


    });
  }
}
