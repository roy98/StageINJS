import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: string

  constructor(private authservice: AuthentificationService,
              private formbuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]{6,}')]]
    })
  }

  onSubmit(){
    const email = this.loginForm.get('email').value
    const password = this.loginForm.get('password').value

    this.authservice.LoginUser(email, password).then(()=>{
      this.router.navigate(['/app/myAccount'])
    }, 
    ()=>{
      this.error = 'Incorrect Login'
    })
  }
}
