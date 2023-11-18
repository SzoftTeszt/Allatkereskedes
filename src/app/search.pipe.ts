import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any, keresendo:any) {
    
    if (!adatok) return null;
    if (!keresendo) return adatok;

    // return adatok.filter(
    //   (sor:any)=>sor.nev.toLowerCase().
    //     includes(keresendo.toLowerCase())
    // )

    return adatok.filter(
      (sor:any)=>JSON.stringify(sor).toLowerCase().
        includes(keresendo.toLowerCase())
    )
  }

}
