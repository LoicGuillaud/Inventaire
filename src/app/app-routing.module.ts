import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaisieComponent} from "./entites/saisie/saisie.component";
import {AdminComponent} from "./entites/admin/admin.component";


const routes: Routes = [
  { path: 'saisie', redirectTo:'', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: '', component: SaisieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
