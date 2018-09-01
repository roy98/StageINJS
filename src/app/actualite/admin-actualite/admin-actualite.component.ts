import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-actualite',
  templateUrl: './admin-actualite.component.html',
  styleUrls: ['./admin-actualite.component.css']
})
export class AdminActualiteComponent implements OnInit {

  @Input() titre: string
  constructor() { }

  ngOnInit() {
  }

  onDeleteActus(){
    console.log('actualité supprimé avec success --> ' + this.titre)
  }
}
