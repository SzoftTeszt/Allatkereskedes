import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent {
  rendezOszlop:any
  rendezIrany:any=1

  ujAllat:any={}
  allatok:any
  fajok:any
  keresendo:any
  text:any
  oszlopok:any
  // oszlopok=[
  //   {key:"id", text:"Id", type:"plain"},
  //   {key:"nev", text:"Név", type:"text"},
  //   {key:"faj", text:"Faj", type:"select", options:[]},
  //   {key:"ar", text:"Ár", type:"number"}
  // ]
  constructor(private base:BaseService, 
      private config:ConfigService,
      private search:SearchService){
    
    this.search.getSearch().subscribe(
      (res)=>this.keresendo=res
    )
    
    
    this.config.getText().subscribe(
      (text)=>
      {
        this.text=text
        this.oszlopok=text.oszlopok
      }
    )
    this.base.getAnimals().subscribe(
      (animals)=>{
        this.allatok=animals
        // this.base.getRaces().subscribe(
        //   (fajok)=>
        //   { this.fajok=fajok
        //     this.oszlopok[2].options= Object.assign(fajok)
        //   }
        // )
      }
    )
   
  }

  save(allat:any){
    // console.log("allat1", allat)
    allat.ar=Number(allat.ar)
    this.base.updateAnimal(allat)
  }

  del(allat:any){
    this.base.deleteAnimal(allat)
  }
  add(){
    this.ujAllat.ar=Number(this.ujAllat.ar)
    this.base.addAnimal(this.ujAllat)    
    this.ujAllat={}
  }

  rendez(oszlop:any){
    this.rendezOszlop=oszlop
    this.rendezIrany++;    
   
    if (this.rendezIrany==4)
    { 
      this.rendezIrany=1
      this.rendezOszlop=this.oszlopok[0]
    }    

    console.log("Irany",this.rendezIrany)
    console.log("oszlop",this.rendezOszlop)
  }

}
