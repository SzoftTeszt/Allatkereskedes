import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url=" http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getAnimals(){
    return this.http.get(this.url+"allatok")
  }
  getRaces(){
    return this.http.get(this.url+"fajok")
  }
}
