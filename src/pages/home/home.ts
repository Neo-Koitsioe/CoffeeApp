import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quantity:number = 0;
  isOrdered:number = 0;
  cream: string;
  chocolate:string;
  name: string;

  costCream: number = 3;
  costChocolate: number = 4;
  price:number = 0.00;

  constructor(public navCtrl: NavController) {

  }

  onClick(x){
    if(x === 'b1'){
      this.quantity +=1;
    }else if(x === 'b2' && this.quantity >0){
      this.quantity -=1;
    }
   else if(x == 'reset'){
        this.isOrdered = 0;
        this.quantity = 0;
   }
  }
  onClickOrder(y){
      if(y === 'order' && this.quantity  !=0 && this.name != null &&  this.chocolate != null && this.cream != null){
        this.isOrdered = 1;
        this.cream = "+ Whipped Cream  + '\\n'";
        this.chocolate = "+ Chocolate";
        this.price = (this.costChocolate + this.costCream) * this.quantity;
      }if(y === 'order' && this.quantity  !=0 && this.name != null && this.cream != null){
        this.isOrdered = 1;
        this.cream = "+ Whipped Cream";
        this.price = this.costCream * this.quantity;
      }else  if(y === 'order' && this.quantity  !=0 && this.name != null  && this.chocolate != null){
        this.isOrdered = 1;
        this.chocolate = "+ Chocolate";
        this.price = this.costChocolate * this.quantity;
      }
      
  }

  



}
