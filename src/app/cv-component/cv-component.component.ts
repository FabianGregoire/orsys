import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent {
  /*candidat1 = [1, "gregoire", "Fabian", 22, "Développeur FullStack", "https://pixabay.com/images/id-156584/"];
  candidat2 = [2, "refegz", "Fabzevervvian", 202, "CEO", "https://pixabay.com/images/id-156584/"];
  candidat3 = [3, "Louis", "Lagagnier", 25, "vendeur", "https://pixabay.com/images/id-156584/"];
  candidats = [this.candidat1, this.candidat2, this.candidat3];*/

  selectedCandidat: Candidat;

  tabCandidats: Candidat[] = [
    new Candidat(1, 'Fabian', 'Gregoire', 22, 'Développeur fullstack', '../../assets/avatar.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', '../../assets/bart.jpeg'),
    new Candidat(1, 'Homer', 'Simpson', 51, 'Directeur', '../../assets/homer.jpg'),
  ];

  getSelectedCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
