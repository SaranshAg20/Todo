import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }
  getUserData(){
    // let url:string="https://reqres.in/api/users?page=2";
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
