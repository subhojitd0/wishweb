import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';


export interface cart {
  id: string;
  user: string;
  product: string;
  quantity: string;
}

export interface cartmeta{
  count:string;
  total:string;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  cart:any;
  meta:any;
  usermail:any;
  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService, private toastr: ToastrService){
    this.usermail = localStorage.getItem('wishuseremail'); 
  }

  ngOnInit(): void {
    
    let data='{"mode":0,"user":"'+this.usermail+'"}';
    this.apiservice.post(Cart_API,data).subscribe((resp:any)=>{
    const cart:cart[]=resp.result;
    const cartmeta:cartmeta[]=resp.meta;
    this.cart=cart;
    this.meta=cartmeta;
    this.sharedataservice.cartcount=this.meta.count;
    });

  }

  deleteitem(pid:any){
    let data='{"mode":3,"user":"'+this.usermail+'","productid":"'+pid+'"}';
    this.apiservice.post(Cart_API,data).subscribe((resp:any)=>{
    const success=resp.status;
    console.log(success);
    if(success==1)
    {
        this.toastr.success('Removed from cart', 'Item Removed',{
          closeButton:true
        })
        let data='{"mode":0,"user":"'+this.usermail+'"}';
        this.apiservice.post(Cart_API,data).subscribe((resp:any)=>{
        const cart:cart[]=resp.result;
        const cartmeta:cartmeta[]=resp.meta;
        this.cart=cart;
        this.meta=cartmeta;
        this.sharedataservice.cartcount=this.meta.count;
        });
        //location.reload();

        
     }
    
    });

  }
}
