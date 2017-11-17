import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'
@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  constructor(private collegueService:CollegueService) {
    /*this.collegue=collegue
    this.serviceCol=collegueSrv*/
    //this.collegueService.listerCollegues().then((tab)=>{this.collegues=tab})  
  
  }

  ngOnInit() {
    //this.collegue = new Collegue("test1","URL",50)
    //this.serviceCol = new CollegueService();
  }

  jaime(){
    //this.serviceCol.aimerUnCollegue(this.collegue)
  }

  jeDeteste(){
   // this.serviceCol.detesterUnCollegue(this.collegue)
  }

}
