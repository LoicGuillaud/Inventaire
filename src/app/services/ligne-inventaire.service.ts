import { Injectable } from '@angular/core';
import {LigneInventaireComponent} from "../entites/ligne-inventaire/ligne-inventaire.component";
import {Observable, Subscription, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LigneInventaireService {

  constructor(private http: HttpClient) { }

  ajoutLigneInventaire(ligneInventaireAjout: LigneInventaireComponent): Observable<LigneInventaireComponent>{
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      console.log(this.http.post<LigneInventaireComponent>("http://localhost:3839/listeligne/save/",ligneInventaireAjout, head))
      return this.http.post<LigneInventaireComponent>("http://localhost:3839/listeligne/save/",ligneInventaireAjout, head)
    }else{
      return this.http.post<LigneInventaireComponent>("http://128.0.0.220:3839/listeligne/save/",ligneInventaireAjout, head)
    }

  }
}
