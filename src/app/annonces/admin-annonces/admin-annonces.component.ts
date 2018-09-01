import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-annonces',
  templateUrl: './admin-annonces.component.html',
  styleUrls: ['./admin-annonces.component.css']
})
export class AdminAnnoncesComponent implements OnInit {
  
  @Input() titre: string
  @Input() ville: string
  constructor() { }

  ngOnInit() {
  }

  onDeleteAnnonce(){
    console.log('Titre: ' + this.titre + ' --> deleted success')
  }
}
