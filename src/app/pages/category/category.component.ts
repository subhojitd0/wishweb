import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { shareDataService } from 'src/shared/services/share.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryid:any;
  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService){
    this.sharedataservice.sharedata='category';
  }

  ngOnInit(): void {
    this.categoryid=this.activatedRoute.snapshot.paramMap.get('id');
    
  }
}
