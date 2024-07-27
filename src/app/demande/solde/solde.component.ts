import { Component } from '@angular/core';
import { Solde } from '../../shared/classes/solde';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent {
  soldee: Solde = {} as Solde;

  constructor() {
    // Initialize your soldee object here
    this.soldee.acquis = 10; // Example value
    this.soldee.reste = 5;   // Example value
    this.soldee.jour_pris = 2; // Example value
  }

  // Méthode pour mettre à jour le solde
  updateSolde(duree: number): void {
  
    this.soldee.reste = this.soldee.acquis-duree;
    this.soldee.jour_pris = duree;
  }
}
