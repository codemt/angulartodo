import { Component, OnInit } from '@angular/core';
import { GetalltodosService } from '../Providers/getalltodos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  // todos: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {


    console.log(params);

   });
  }


  // getTodo(){

  //         this.editTodo.getAllTodos().subscribe


  // }

}
