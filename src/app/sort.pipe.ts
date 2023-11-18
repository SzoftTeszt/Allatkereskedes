import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(adatok:any,oszlop:any, irany:any) {
    // console.log("adatok", adatok)
    // console.log("oszlop", oszlop)
    // console.log("irany", irany)

    if (!adatok) return null
    if (!oszlop) return adatok

    return adatok.sort(
      (a:any, b:any)=>{
            if (oszlop.type=="text"){
              let vissza= a[oszlop.key].localeCompare(b[oszlop.key],{ sensitivity: 'base' })
              //accent
              if (irany==3) vissza=vissza*-1
              return vissza;
            }
            else {
              let vissza
              let k = a[oszlop.key]-b[oszlop.key]

              if (k>0) vissza=1
              else if (k<0) vissza= -1
              else vissza=0

              if (irany==3) vissza=vissza*-1
              return vissza

              // return Math.xxx(a[oszlop.key]-b[oszlop.key])
            }
      }
    )


  }

}
