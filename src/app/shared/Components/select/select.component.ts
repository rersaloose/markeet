
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  {
@Input() tittle:string="";
@Input() select:string="";
@Input()data:any[]=[];
@Input()all:boolean=true;
@Output() slectedValue = new EventEmitter()
constructor(){}

dectedData(event:any){
this.slectedValue.emit(event)
}
  }




