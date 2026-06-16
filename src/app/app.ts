import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Liste de ta flotte de camions
  vehicules = [
    { 
      id: 1, 
      marque: 'Freightliner', 
      modele: 'Classic XL Chromé', 
      statut: 'Disponible', 
      image: 'alles-transport-4887423-1920.png' // Modifié avec le tiret du milieu et .png
    },
    { 
      id: 2, 
      marque: 'Volvo Trucks', 
      modele: 'FH 460 Citerne', 
      statut: 'En Maintenance', 
      image: 'hpgruesen-tank-truck-1388933-1920 (2).jpg' // Modifié avec le tiret du milieu et l'espace
    },
    { 
      id: 3, 
      marque: 'MAN', 
      modele: 'TGX Container Rouge', 
      statut: 'Disponible', 
      image: 'kalhh-truck-333251-1920.jpg' // Modifié avec le tiret du milieu
    },
    { 
      id: 4, 
      marque: 'Peterbilt', 
      modele: '389 Confort USA', 
      statut: 'Disponible', 
      image: 'rauschenberger-usa-3208827-1920.jpg' // Modifié avec le tiret du milieu
    }
  ];

  // --- ACTIONS DES BOUTONS DU MENU NAVIGATION ---
  naviguerVers(page: string) {
    alert(`Navigation vers la section : ${page}.\n(Dans une application complète, cela activerait le Router d'Angular pour changer de page)`);
  }

  // --- ACTION DU BOUTON VERT FLASHY ---
  ouvrirFormulaireRDV() {
    alert(`Ouverture du module de Prise de Rendez-vous du Garage SPL 92.\nUne notification de demande de réservation va être envoyée à l'atelier de Saint-Cloud.`);
  }

  // --- ACTION DES CARTES ---
  voirDetails(marque: string, modele: string) {
    alert(`Demande d'informations pour le véhicule : ${marque} - ${modele}.\nNotre équipe de Saint-Cloud va vous recontacter.`);
  }
}