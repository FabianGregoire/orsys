import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit{
  @Input() allCandidats : Candidat[];
  @Output() msgToCv = new EventEmitter();
  cdt1: Candidat;
  cdt2: Candidat;
  cdt3: Candidat;
  constructor(){};
  ngOnInit(): void{
    console.log(this.allCandidats);
    this.cdt1 = this.allCandidats[0];
    this.cdt2 = this.allCandidats[1];
    this.cdt3 = this.allCandidats[2];
  }
  sendCandidatToCv(cand){
    this.msgToCv.emit(cand);
  }
}
