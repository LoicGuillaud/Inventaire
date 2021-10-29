import {Component, Inject, inject, OnInit} from '@angular/core';
import {LigneInventaireService} from '../../services/ligne-inventaire.service';

@Component({
  selector: 'app-ligne-inventaire',
  templateUrl: './ligne-inventaire.component.html',
  styleUrls: ['./ligne-inventaire.component.css']
})

export class LigneInventaireComponent implements OnInit {

  codeArticleLot: string;
  emplacement: string;
  quantite: number;

  constructor() {
    this.codeArticleLot = "";
    this.emplacement = "";
    this.quantite = 0.00;
  }

  ngOnInit(): void {
  }

}
