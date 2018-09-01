import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Actualite } from './../models/actualite.model';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  Actus = [new Actualite('West Region: SDF discuss campaign strategy in Bafoussam', 
  'Officials of the Social Democratic Front (SDF) Party assembled at the Bafoussam council hall in the West region in elaborate'),
  new Actualite('Sommet Chine – Afrique : les enjeux de cette 3e édition', 'La 7ème Conférence ministérielle du Forum de Coopération Chine-Afrique élevée au rang de Sommet se tiendra à Beijing du 3'),
  new Actualite('Le Cameroun au 7e sommet Chine – Cameroun', 'Avec près de 3000 milliards investis au cours des deux dernières décennies, la Chine est devenue le premier investisseur au Cameroun')
]
  
  private all_actus = "http://localhost:3000/api/actualite"
  private user_actus = "http://localhost:3000/api/actualite/user"
  private add_actus = "http://localhost:3000/api/actualite/new"
  private delete_actus = "http://localhost:3000/api/actualite/delete"

  constructor(private http: HttpClient) { }

  getActualite(){
    return this.http.get<any>(this.all_actus)
  }

  getUserActualite(user){
    return this.http.get<any>(this.user_actus, user)
  }

  new_Actu(actu: Actualite){
    /* TODO */
  }

  delete_Actu(actu: Actualite){
    /* TODO */
  }

}
