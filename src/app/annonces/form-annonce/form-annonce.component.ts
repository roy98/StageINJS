import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-annonce',
  templateUrl: './form-annonce.component.html',
  styleUrls: ['./form-annonce.component.css']
})
export class FormAnnonceComponent implements OnInit {

  annonceForm: FormGroup
  error: string

  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.annonceForm = this.formBuild.group(
      {
        titre: ['', Validators.required],
        prix: ['', Validators.required],
        region: ['', Validators.required],
        ville: ['', Validators.required],
        details: ['', Validators.required],
        image: ['', Validators.required]
      }
    )
  }

  onSubmit(){
    console.log('annonce submited succes')
  }
}
