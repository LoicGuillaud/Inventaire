import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  designation: string;
  unite: string;

  constructor() {
    this.designation = "";
    this.unite = "";
  }

  ngOnInit(): void {
  }

}
