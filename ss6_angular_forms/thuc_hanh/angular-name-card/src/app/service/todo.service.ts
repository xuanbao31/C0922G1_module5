import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }
  URL=("http://localhost:3000/todos")

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.URL);
  }

  saveTodo(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.URL, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(this.URL+ "/" + todo.id, todo);
  }
  deleteTodo(todo): Observable<Todo>{
    return this.httpClient.delete<Todo>(this.URL+"/"+todo.id);
  }
}
