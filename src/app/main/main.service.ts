import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../shared/post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(
    public http: HttpClient
  ) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}
