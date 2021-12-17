import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ArticleComponent} from "../entites/article/article.component";
import {EmplacementComponent} from "../entites/emplacement/emplacement.component";

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {

  constructor(private http: HttpClient) { }

  getEmplacement(codeEmplacement: String){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<EmplacementComponent>("http://localhost:3839/listeEmplacement/get/" + codeEmplacement, head)
    }else{
      return this.http.get<EmplacementComponent>("http://128.0.0.220:3839/listeEmplacement/get/" + codeEmplacement, head)
    }

  }
}
