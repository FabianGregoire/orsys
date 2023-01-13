import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent {
  @Input() oneCandidat : Candidat;

  @Output() msgToList = new EventEmitter();
  sendCandidatToList(){
    this.msgToList.emit(this.oneCandidat);
  }

}
