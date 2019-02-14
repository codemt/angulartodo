import { Component, OnInit } from '@angular/core';
import { GetalltodosService } from '../Providers/getalltodos.service';
import { ActivatedRoute } from '@angular/router';
import { EditTodoService } from '../Providers/edit-todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
   todo: any;
   id: any;
  constructor(private route: ActivatedRoute, private EditTodo: EditTodoService) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params => {


     this.id = params.get('id');
    console.log(params);
   });

   this.editTodo(this.id);
  }
  editTodo(id: any) {

      console.log('ID is ' + id);

      this.EditTodo.editTodo(id).subscribe(res => {
          console.log(res);
          this.todo = res;
      });

  }

}
