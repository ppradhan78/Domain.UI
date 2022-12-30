import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Postoutputmodel  } from '../model/Postsamplemodel';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient){  }

  public getAllPosts(): Observable<Postoutputmodel[]> 
  {
    return this.http.get<Postoutputmodel[]>("https://jsonplaceholder.typicode.com/posts");
  }
}