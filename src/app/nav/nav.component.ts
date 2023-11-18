import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  aktLang="Magyar"
  text:any
  constructor(private config:ConfigService, private search:SearchService){
    this.config.getText().subscribe(
      (res)=> this.text=res.nav
    )
  }
  changeLang(lang:any){
    this.config.setLanguage(lang)
    this.aktLang=lang.text
  }

  setSearch(keres:any){
    // console.log(keres)
    this.search.setSearch(keres)
  }
  changeShearch(event:any){
    console.log(event)
  }
}
