import { Injectable } from '@angular/core';
import {LigneInventaireComponent} from "../entites/ligne-inventaire/ligne-inventaire.component";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ParametresComponent} from "../entites/parametres/parametres.component";

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  constructor(private http: HttpClient) { }

  ajoutParametres(parametresAjout: ParametresComponent): Observable<ParametresComponent>{
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.post<LigneInventaireComponent>("http://localhost:8080/listeligne/save/",parametresAjout, head)
    }else{
      return this.http.post<LigneInventaireComponent>("http://128.0.0.220:8080/listeligne/save/",parametresAjout, head)
    }

  }
}
