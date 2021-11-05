import {Component, Inject, inject, OnInit} from '@angular/core';
import {LigneInventaireService} from '../../services/ligne-inventaire.service';
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-ligne-inventaire',
  templateUrl: './ligne-inventaire.component.html',
  styleUrls: ['./ligne-inventaire.component.css']
})

export class LigneInventaireComponent implements OnInit {

  codeArticleLot: string;
  emplacement: string;
  quantite: number;
  zone: string;
  numEquipe: number;
  numPassage: number;

  constructor() {
    this.codeArticleLot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.zone = "";
    this.numEquipe = 0;
    this.numPassage = 0;
  }

  ngOnInit(): void {
  }

}
