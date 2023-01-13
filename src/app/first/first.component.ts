import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
    name : string = "Fabian";
    age : number = 22;
    color = "pink";
    clic(){
      alert("T'y as cliqué sur ce bouton hein");
    }
    getName() : string {
      return this.name;
    }

    setName(newName : string){
      this.name = newName;
    }
}
