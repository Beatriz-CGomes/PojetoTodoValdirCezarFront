import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../models/todo";
import { environments } from "../environments/environments";

@Injectable({
  providedIn: "root",
})
export class TodoService {

  baseUrl = environments.baseUrl;
  constructor(private http: HttpClient) {}

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
}
