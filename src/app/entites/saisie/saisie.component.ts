import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LigneInventaireService} from "../../services/ligne-inventaire.service";
import {LigneInventaireComponent} from "../ligne-inventaire/ligne-inventaire.component";


@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent implements OnInit {

  ligneInventaireForm: FormGroup = this.fb.group({
    codeArticleLot: ['', Validators.compose([Validators.required])],
    emplacement: ['', Validators.compose([Validators.required])],
    quantite: ['', Validators.compose([Validators.required])],
  });

  codeArticle: string;
  lot: string;
  emplacement: string;
  quantite: number;
  lic: LigneInventaireComponent;

  constructor(private fb: FormBuilder, private ligneInventaireService: LigneInventaireService) {
    this.codeArticle = "";
    this.lot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.lic = new LigneInventaireComponent();
  }

  ngOnInit(): void {

  }

  onSubmit(data: any): void {

    this.ligneInventaireService.ajoutLigneInventaire(data).subscribe()
  }

}
