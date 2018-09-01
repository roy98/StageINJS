import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from './../../service/annonces.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  favoris= []
  isUserFavoris=true;
  constructor(private annonceService: AnnoncesService) { }

  ngOnInit() {
    this.favoris=this.annonceService.userAnnonceFavoris
  }

}
