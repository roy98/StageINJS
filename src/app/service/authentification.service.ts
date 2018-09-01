import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  connect_User = {nom: 'Roy', prenom: 'Christo', email: 'christoroy@gmail.com', password: 'fred9185'}
  private _UserRegisterAPI = "http://localhost:3000/api/register"
  private _UserLoginAPI = "http://localhost:3000/api/login"

  constructor(private http: HttpClient) { }

  /*methode pour la creation d'un nouvel utilisateur */
  RegisterUser(user: User){
    return new Promise((resolve, reject)=>{
      if(user.nom ==='christo')
      resolve()
      else
      reject()
    })
  }

  /*methode pour la connexion d'un utilisateur */
  LoginUser(email: string, password: string){
    return new Promise((resolve, reject)=>{
      if(email ==='christo@gmail.com')
      resolve()
      else
      reject()
    })
  }

/*methode pour la déconnexion d'un utilisateur */
  disconnectUser(){

  }



}
