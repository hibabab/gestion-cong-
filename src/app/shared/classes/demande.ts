export interface Demande {
    idEmploye: number;        // Identifiant unique de l'employé demandant le congé
    nomEmploye: string; 
    prenomEmploye:string      // Nom de l'employé
    identifiantDemande: number; // Identifiant unique de la demande de congé
    dateDebut: Date;          // Date de début du congé
    dateFin: Date;            // Date de fin du congé
    typeConges: string;       // Type de congé (ex. : annuel, maladie, maternité)
    statut: 'en attente' | 'approuvé' | 'rejeté'; // Statut actuel de la demande de congé
    raison?: string;          // Motif facultatif de la demande de congén
}
