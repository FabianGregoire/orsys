import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent {
  @Input() selCandidat: Candidat;
}
