import { Component, OnInit, Input } from '@angular/core';
import { AnnoncesService } from './../../../service/annonces.service';

@Component({
  selector: 'app-user-annonces-view',
  templateUrl: './user-annonces-view.component.html',
  styleUrls: ['./user-annonces-view.component.css']
})
export class UserAnnoncesViewComponent implements OnInit {

@Input() titre: string
@Input() ville: string
@Input() id: number
@Input() isUserFavoris=false
@Input() isUserAnnonce=false
  constructor(private annonceservice: AnnoncesService) { }

  ngOnInit() {
  }

  onDeleteAnnonce(){
    console.log('titre: '+ this.titre + ' Annonce delete')
  }

  onDeleteFavoris(){
    console.log('titre: '+ this.titre + ' Favoris delete')
  }
}
