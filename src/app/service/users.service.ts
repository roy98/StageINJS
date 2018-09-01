import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users=[
    {id: 1, nom: 'Christo', prenom: 'Roy', email: 'christo@test.cm'},
    {id: 2, nom: 'Admin', prenom: 'Admin', email: 'admin@test.cm'},
    {id: 3, nom: 'User', prenom: 'User', email: 'user@test.cm'},
    {id: 4, nom: 'Test', prenom: 'Test', email: 'test@test.cm'},
    {id: 5, nom: 'Free', prenom: 'Free', email: 'free@test.cm'}
  ]
  private userAPI = "http://localhost:3000/api/annonces/user" /* API Routes to the user   */
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.userAPI)
  }

}
