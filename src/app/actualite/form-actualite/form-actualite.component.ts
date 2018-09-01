import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActualiteService } from './../../service/actualite.service';
import { Actualite } from '../../models/actualite.model';


@Component({
  selector: 'app-form-actualite',
  templateUrl: './form-actualite.component.html',
  styleUrls: ['./form-actualite.component.css']
})
export class FormActualiteComponent implements OnInit {

  actusForm: FormGroup
  sucess: string
  error: string

  constructor(private actusService: ActualiteService,
    private formbuilder: FormBuilder) { }


  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.actusForm = this.formbuilder.group({
      titre: ['', [Validators.required]],
      contenu: ['', [Validators.required]]
    })
  }

  onSubmit(){

    this.actusService.Actus.push(new Actualite(this.actusForm.get('titre').value, this.actusForm.get('contenu').value))
    this.sucess="Ajouté"
  }
}
