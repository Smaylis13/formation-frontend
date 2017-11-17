import { Component, OnInit , Input} from '@angular/core';
import {Collegue} from '../../app/shared/domain/collegue'
import {CollegueService} from '../../app/shared/service/collegue.service'
@Component({
  selector: 'app-tableau-collegue',
  templateUrl: './tableau-collegue.component.html',
  styleUrls: ['./tableau-collegue.component.css']
})
export class TableauCollegueComponent implements OnInit {

  @Input() collegues:Collegue[]
  
  
  constructor(public collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then((tab)=>{this.collegues=tab})
  }

  // TODO: jaime() et jeDesteste()
  jaime(col:Collegue){
    this.collegueService.aimerUnCollegue(col)
  }

  jeDeteste(col:Collegue){
    this.collegueService.aimerUnCollegue(col)
  }
}
