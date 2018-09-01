import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from './../../service/annonces.service';

@Component({
  selector: 'app-user-annonces',
  templateUrl: './user-annonces.component.html',
  styleUrls: ['./user-annonces.component.css']
})
export class UserAnnoncesComponent implements OnInit {

  userAnnonces = []
  isUserAnnonce=true;

  constructor(private annonceService: AnnoncesService) { }

  ngOnInit() {
    this.userAnnonces = this.annonceService.userAnnonce;
  }


}
