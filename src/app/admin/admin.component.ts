import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from './../service/annonces.service';
import { ActualiteService } from './../service/actualite.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  all_annonces =[]
  all_actus = []
  constructor(private annonceService: AnnoncesService, private actusService: ActualiteService) { }

  ngOnInit() {
    this.all_annonces= this.annonceService.annonces
    this.all_actus= this.actusService.Actus
  }

}
