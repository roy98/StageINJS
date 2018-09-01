import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from './../service/annonces.service';
import { ActualiteService } from './../service/actualite.service';
import { Actualite } from '../models/actualite.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allAnnonces = [] // table of annonces
  lastActus = [] //table of actus

  constructor(private annonceService: AnnoncesService, private actus: ActualiteService) { }

  ngOnInit() {
    this.allAnnonces = this.annonceService.annonces;
    this.lastActus = <any>this.actus.Actus[this.actus.Actus.length-1]
  }

}
