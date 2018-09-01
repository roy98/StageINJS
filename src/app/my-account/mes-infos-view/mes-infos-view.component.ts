import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from './../../service/authentification.service';

@Component({
  selector: 'app-mes-infos-view',
  templateUrl: './mes-infos-view.component.html',
  styleUrls: ['./mes-infos-view.component.css']
})
export class MesInfosViewComponent implements OnInit {
  updateUserForm: FormGroup
  error: string   // cas d'échec
  success: string // cas de reussite
  dataUser; // conteneur des données utilisateurs

  constructor(private formbuilder: FormBuilder, private route: Router, private authSer: AuthentificationService) { }

  ngOnInit() {
    this.dataUser = this.authSer.connect_User // récuperation des données user dans le service de l'authentification
    this.initForm()
  }

  initForm(){ // initialisation du formulaire
    this.updateUserForm = this.formbuilder.group(
      {
        nom: [this.dataUser.nom, [Validators.required, Validators.minLength(3)]],
        prenom: [this.dataUser.prenom, [Validators.required, Validators.minLength(3)]],
        email: [this.dataUser.email, [Validators.required, Validators.email]],
        password: [this.dataUser.password, [Validators.required, Validators.pattern('[0-9a-zA-Z]{6,}')]]
      }
    );
  }

  onSubmit(){ // soumission du formulaire
    console.log('modification en cour');
    this.dataUser.nom = this.updateUserForm.get('nom').value
    this.success = 'Modification terminer avec success'
  }
}
