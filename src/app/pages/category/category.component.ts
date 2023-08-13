import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryid:any;
  constructor(private activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
    this.categoryid=this.activatedRoute.snapshot.paramMap.get('id');
    
  }
}
