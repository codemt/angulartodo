import { Component, OnInit } from '@angular/core';
import { PostTodoService } from '../Providers/post-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(private postTodo: PostTodoService) {}

  ngOnInit() {


  }


  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);

    console.log(f.value);

    this.postTodo.getAllTodos(f.value);

  }

}
