import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url=" http://localhost:3000/"
  animalsSubject = new BehaviorSubject([])

  constructor(private http:HttpClient) {
    this.loadAnimals()
   }

  private loadAnimals(){
    this.http.get(this.url+"allatok").subscribe(
      (animals:any)=> this.animalsSubject.next(animals)
    )
  }
  getAnimals(){
    return this.animalsSubject
  }

  deleteAnimal(animal:any){
    this.http.delete(this.url+"allatok/"+animal.id).subscribe(
      ()=>this.loadAnimals()
    )
  }

  updateAnimal(animal:any){
    this.http.put(this.url+"allatok/"+animal.id,animal).subscribe(
      ()=>this.loadAnimals()
    )
  }

  addAnimal(animal:any){
    this.http.post(this.url+"allatok", animal).subscribe(
      ()=>this.loadAnimals()
    )
  }



  getRaces(){
    return this.http.get(this.url+"fajok")
  }
}
