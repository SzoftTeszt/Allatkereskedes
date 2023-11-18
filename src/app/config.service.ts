import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // language="hu"
  text:any={}
  getTextSub= new BehaviorSubject(this.text)


  constructor(private http: HttpClient) { 
    this.loadText("hu")
  }

  getText(){
    return this.getTextSub
  }

  loadText(lang:any){
    this.http.get('../assets/lang_'+lang+'.json').subscribe(
      (res)=>{
        console.log(res)
        this.getTextSub.next(res)
      }
    )
  }

  setLanguage(lang:any){
    this.loadText(lang.sign)
  }

}
