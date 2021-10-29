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
      return this.http.post<LigneInventaireComponent>("http://localhost:8080/listeligne/save/",ligneInventaireAjout, head)
    }else{
      return this.http.post<LigneInventaireComponent>("http://128.0.0.220:8080/listeligne/save/",ligneInventaireAjout, head)
    }

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
