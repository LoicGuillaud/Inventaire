import { Component, OnInit, ElementRef, Directive, HostListener, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LigneInventaireService} from "../../services/ligne-inventaire.service";
import {LigneInventaireComponent} from "../ligne-inventaire/ligne-inventaire.component";
import {parseJson} from "@angular/cli/utilities/json-file";
import {concat} from "rxjs";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {ArticleService} from "../../services/article.service";
import {ArticleComponent} from "../article/article.component";
import {createViewChild} from "@angular/compiler/src/core";


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
    numEquipe: ['', Validators.compose([Validators.required])],
    numPassage: ['', Validators.compose([Validators.required])],
    zone: ['', Validators.compose([Validators.required])],
  });

  adminForm: FormGroup = this.fb.group({
    numEquipe: ['', Validators.compose([Validators.required])],
    numPassage: ['', Validators.compose([Validators.required])],
    zone: ['', Validators.compose([Validators.required])],
  });

  codeArticle: string;
  lot: string;
  emplacement: string;
  quantite: number;
  zone: string;
  numEquipe: number;
  numPassage: number;
  etat: boolean;
  designation: string;
  unite: string;
  mdp: string;
  erreur: string;
  lic: LigneInventaireComponent;

  constructor(private fb: FormBuilder, private ligneInventaireService: LigneInventaireService, private articleService: ArticleService) {
    this.codeArticle = "";
    this.lot = "";
    this.emplacement = "";
    this.quantite = 0.00;
    this.zone = "";
    this.numEquipe = 0;
    this.numPassage = 0;
    this.etat = true;
    this.designation = "";
    this.unite = "";
    this.mdp = "";
    this.erreur = "";
    this.lic = new LigneInventaireComponent();
  }

  ngOnInit(): void {

  }

  onSubmit(data: any): void {
    if (this.designation != ""){
      this.ligneInventaireService.ajoutLigneInventaire(data).subscribe();
      this.ligneInventaireForm.get('codeArticleLot')?.reset();
      this.ligneInventaireForm.get('emplacement')?.reset();
      this.ligneInventaireForm.get('quantite')?.reset();
      this.designation = "";
      this.unite = "";
      this.erreur = "";
    }else{
      this.erreur = "Le code article n'est pas valide";
    }

  }

  checkMdp(event: any){
    if (event.target.mdp.value == "INVADM2K21"){
      this.etat = false;
    }
  }
  paramSubmit(event: any): void{
    this.etat = true;
  }

  paramEdit(): void{
    this.etat = false;
  }

  readonly(): boolean{
    return this.etat;
  }

  getInfosArticle(codeArtLot: string){
    if (codeArtLot != ""){
      this.articleService.getInfosArticle(codeArtLot)
        .subscribe((data: ArticleComponent) => {this.designation = data.designation, this.unite = data.unite});
      this.erreur = "";
    }else{
      this.designation = "";
      this.unite = "";
    }


  }


}
