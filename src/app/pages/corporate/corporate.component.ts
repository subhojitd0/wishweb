import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/service';
import { shareDataService } from '../../../shared/services/share.service';



@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent {

  constructor(private apiservice:ApiService, private sharedataservice:shareDataService) {
    this.sharedataservice.sharedata='corporate';
  }

}
