import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { AuthentificationService } from '../../service/authentification.service';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup 
  error: string

  constructor(private formbuilder: FormBuilder,
              private authservice: AuthentificationService,
              private route: Router) { }

  ngOnInit() {
    this.initForm()
  }

  /* initialisation du reactive forms*/
  initForm(){
    this.registerForm = this.formbuilder.group(
      {
        nom: ['', [Validators.required, Validators.minLength(3)]],
        prenom: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]{6,}')]]
      }
    );
  }
/* soumission du reactive forms */
  onSubmit(){ 
    const nom = this.registerForm.get('nom').value
    const prenom = this.registerForm.get('prenom').value
    const email = this.registerForm.get('email').value
    const password = this.registerForm.get('password').value

    let user = new User(nom, prenom, email, password)
    this.authservice.RegisterUser(user).then(()=>{
      this.route.navigate(['/app/myAccount'])
    },
    () =>{
      this.error = "Error with the name: not Christo"
    })
    
  }

}
