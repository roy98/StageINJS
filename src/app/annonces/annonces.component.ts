import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  @Input() titre: string
  @Input() ville: string
  @Input() id: number
  constructor() { }

  ngOnInit() {
  }

  

}
