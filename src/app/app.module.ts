import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SaisieComponent } from './entites/saisie/saisie.component';
import { AdminComponent } from './entites/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LigneInventaireComponent } from './entites/ligne-inventaire/ligne-inventaire.component';
import { ParametresComponent } from './entites/parametres/parametres.component';
import { ArticleComponent } from './entites/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    SaisieComponent,
    AdminComponent,
    LigneInventaireComponent,
    ParametresComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

