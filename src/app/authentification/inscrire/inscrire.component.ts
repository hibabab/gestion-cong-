import { Component } from '@angular/core';
import { User } from '../../shared/user';


@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrl: './inscrire.component.css'
})
export class InscrireComponent {

  user: User = {} as User; 
}
