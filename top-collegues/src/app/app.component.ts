import { Component } from '@angular/core';
// TODO importer la classe Collegue
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
 collegues:Array<Collegue>

 ngOnInit() {
    this.collegues = [new Collegue("Charles","",20),new Collegue("Alfred","",30),new Collegue("Jean","",60)
    ,new Collegue("Hugo","",90),new Collegue("Pierre","",40)]
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement, toastSuccess:HTMLInputElement){

      if (pseudo.value != ""  &&  imageUrl.value !=""){
      this.collegues.push(new Collegue(pseudo.value,imageUrl.value,0));

      toastSuccess.className = ""
      toastSuccess.className += "alert alert-success";
      toastSuccess.innerHTML = `Le collègue <strong>${pseudo.value} </strong>a été ajouté avec  succès`
      pseudo.value=""
      imageUrl.value=""
      toastSuccess.style.visibility = 'visible'
      setTimeout(function(){toastSuccess.style.visibility = 'hidden'},3000);
    }else{
      toastSuccess.className = ""
      toastSuccess.className += "alert alert-danger";
      toastSuccess.innerHTML = `Erreur vous devez saisir un pseudo et une URL`
      toastSuccess.style.visibility = 'visible'
      
    }
    return false;
  }
}