import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../../service/annonces.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-single-annonce',
  templateUrl: './single-annonce.component.html',
  styleUrls: ['./single-annonce.component.css']
})
export class SingleAnnonceComponent implements OnInit {

  titre: string
  ville: string

  constructor(private annonceService: AnnoncesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.titre = this.annonceService.getAnnonceById(+id).titre
    this.ville = this.annonceService.getAnnonceById(+id).ville
  }

}
