import { Component } from '@angular/core';
import { Compte } from 'src/app/models/compte';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  tabComptes: Compte[] = [
    new Compte("compte1", "inative"),
    new Compte("compte2", "unknown")
  ]
  name:string;
  status:string;

  addAccount(){
    this.tabComptes.push(new Compte(this.name, this.status));
  }
}
