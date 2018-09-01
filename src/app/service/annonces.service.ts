import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
    annonces = [
      {id:1, titre: 'Terrain a louer', ville: 'Douala'},
      {id:2, titre: 'Terrain Meuble a Louer', ville:'Mfou'},
      {id:3, titre: 'Terre agricole', ville: 'Yaoundé'},
      {id:4, titre:  'Maison a louer', ville: 'Douala'}
    ]
    userAnnonce = [
      {id:1, titre: 'Terrain a louer', ville: 'Douala'},
      {id:3, titre: 'Terre agricole', ville: 'Yaoundé'},
      {id:2, titre: 'Terrain Meuble a Louer', ville:'Mfou'}
    ]
    userAnnonceFavoris = [
      {id:4, titre:  'Maison a louer', ville: 'Douala'}
    ]

    private all_annonces = "http://localhost:3000/api/annonces"
    private user_annonces = "http://localhost:3000/api/annonces/user" /* API Routes for the user annonces  */
    private new_annonces = "http://localhost:3000/api/annonces/new" /* API Routes for the add annonces module */
    private delete_annonces = "http://localhost:3000/api/annonces/delete" /* API Routes for the delete annonces module */

  constructor(private http: HttpClient) { }

  getAllAnnonces(){
    return this.http.get(this.all_annonces)
  }

  getUserAnnonces(user){
    return this.http.get(this.user_annonces, user)
  }

  new_Aannonce(annonce: Annonce){
    /* TODO */
  }

  delete_Annonce(annonce: Annonce){
    /* TODO */
  }

  getAnnonceById(id: number){
    const annonce = this.annonces.find(
      (AnnObject) =>{
        return AnnObject.id === id
      }
    )
    return annonce
  }
}
