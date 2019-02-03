import { Component, OnInit } from '@angular/core';
import { GetalltodosService } from '../Providers/getalltodos.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todos: any;
  constructor(private getTodos: GetalltodosService) { }

  ngOnInit() {

    this.displayTodos();
  }


  displayTodos() {
    this.getTodos.getAllTodos().subscribe(res => {

      console.log(res);

      this.todos = res;

    });
  }

}
