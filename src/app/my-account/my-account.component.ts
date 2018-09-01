import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../service/annonces.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  allAnnonces = [] // table of annonces
  constructor(private annonceService: AnnoncesService) { }

  ngOnInit() {
    this.allAnnonces = this.annonceService.annonces;
  }

}
