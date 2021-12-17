import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit {

  codeEmplacement: string;
  nomEmplacement: string;
  zoneEmplacement: string;

  constructor() {
    this.codeEmplacement = "";
    this.nomEmplacement = "";
    this.zoneEmplacement = "";
  }

  ngOnInit(): void {
  }

}
