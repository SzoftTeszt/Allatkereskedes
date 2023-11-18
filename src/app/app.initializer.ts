import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { AnimalsListComponent } from "./animals-list/animals-list.component"
import { LogInComponent } from "./log-in/log-in.component"

export function onAppInit( router:Router, http:HttpClient){
    return () =>
    {
        return new Promise( (resolve, reject)=>{
          let componentMap =[
            {name:"HomeComponent", comp: HomeComponent},
            {name:"AnimalsListComponent", comp: AnimalsListComponent},
            {name:"LogInComponent", comp:LogInComponent},
          ]

           http.get('../assets/lang_hu.json').subscribe(
                (res:any)=>{
                  console.log("res: ",res)
                
                  let tomb=[]
                  res.nav.menu.forEach((element:any) => {
                    // console.log(element)
                    let komponens= componentMap.find(
                        (c)=> c.name==element.comp
                    )
                    tomb.push({path:element.link, component:komponens?.comp})
                  });
                  tomb.push({path:"", component:HomeComponent})
                  tomb.push({path:"**", component:componentMap[0].comp})
                //   console.log("Tömb: ",tomb)

                  router.resetConfig(tomb)
                  resolve(true)
                }
              )
        })
    }


}