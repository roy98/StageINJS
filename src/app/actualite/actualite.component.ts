import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  @Input() titre: string
  @Input() contenu: string
  constructor() { }

  ngOnInit() {
  }

}
