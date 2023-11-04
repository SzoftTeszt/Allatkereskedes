import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent {

  allatok:any
  fajok:any
  oszlopok=[
    {key:"id", text:"Id", type:"plain"},
    {key:"nev", text:"Név", type:"text"},
    {key:"faj", text:"Faj", type:"select", options:[]},
    {key:"ar", text:"Ár", type:"number"}
  ]
  constructor(private base:BaseService){
    this.base.getAnimals().subscribe(
      (animals)=>{
        this.allatok=animals
        this.base.getRaces().subscribe(
          (fajok)=>
          { this.fajok=fajok
            this.oszlopok[2].options= Object.assign(fajok)
          }
        )
      }
    )
   
  }
}
