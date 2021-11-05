import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ParametresService} from "../../services/parametres.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup = this.fb.group({
    numEquipe: ['', Validators.compose([Validators.required])],
    numPassage: ['', Validators.compose([Validators.required])],
    zone: ['', Validators.compose([Validators.required])],
  });



  constructor(private fb: FormBuilder, private paramService: ParametresService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any): void {
    this.adminForm.disable();
  }
}
