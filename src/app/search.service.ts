import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private szoSub=new Subject()

  getSearch(){
    return this.szoSub
  }

  setSearch(szo:any){
    this.szoSub.next(szo)
  }

  constructor() { }
}
