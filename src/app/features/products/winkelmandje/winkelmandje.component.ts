import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})
export class WinkelmandjeComponent implements OnInit {

  winkelmandje: Product[] = [];
  totaalPrijs: number;
  inhoudWinkelmandje: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  overDragenWM(input: Product[]){
    this.totaalPrijs = 0;
    if(input.length >0)  
      this.winkelmandje = input;
      this.bestaatWinkelmandje();
      this.berekenTotaal();
  };

  berekenTotaal(){
    this.totaalPrijs = 0;
    if(this.inhoudWinkelmandje){
      this.winkelmandje.forEach(product => this.totaalPrijs += product.price)
    }
  }

  delete(product: Product){
    console.log("deletion eminent");
    let index = this.winkelmandje.indexOf(product)
    this.winkelmandje.splice(index,1);
    this.bestaatWinkelmandje();
    this.berekenTotaal();
  }

  afrekenen(){
    let length = this.winkelmandje.length;
    this.winkelmandje.splice(0,length)
    console.log("your payment was succesfully")
    this.bestaatWinkelmandje();
    this.router.navigate(['/products'])
  }

  bestaatWinkelmandje(){
    this.winkelmandje.length > 0 ? this.inhoudWinkelmandje = true : this.inhoudWinkelmandje = false;
  }
}

