import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddTodoComponent,
    EditTodoComponent,
    ViewTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

    { path: '', component: ViewTodoComponent},
    { path: 'create', component: AddTodoComponent},
    { path: 'edit', component: EditTodoComponent},
    { path: 'edit', component: EditTodoComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
