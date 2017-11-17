import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollegueService {

   collegues:Array<Collegue>
    constructor(private http: HttpClient) {
      //this.collegues = [new Collegue("Charles","http://www.tapis-chic.com/img/p/thickbox/1817-8856.jpg",20)]
      
      /*this.collegues = [new Collegue("Charles","",20),new Collegue("Alfred","",30),new Collegue("Jean","",60)
      ,new Collegue("Hugo","",90),new Collegue("Pierre","",40)]*/

   }
    listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
    return  this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()
      /*return new Promise((resolve,reject)=>{
        return resolve(this.collegues);
      })*/
    }
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
      return new Promise((resolve,reject)=>{
        this.collegues.push(newCollegue);
        console.log(this.collegues)
        return resolve(newCollegue)
      })
    }
    aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
      return new Promise((resolve,reject)=>{
        let list=this.collegues.filter(c => c.nom==unCollegue.nom);
        
        if(list.length>0){
          list[0].score = list[0].score + 10
        }
        return resolve(unCollegue)
        
     })  
   }
    detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
      return new Promise((resolve,reject)=>{
        let list=this.collegues.filter(c => c.nom==unCollegue.nom);
        if(list.length>0){
          list[0].score = list[0].score - 5
        }
        return resolve(unCollegue)
      
     })    
   }
}