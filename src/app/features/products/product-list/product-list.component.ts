
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductserviceService } from 'src/app/core/productservice.service';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  lijstProducten$: Observable<Product[]>;
  gekochteGames: Product[] = [];

  @Output() teBetalenGames = new EventEmitter<Product[]>()

  constructor(private productService: ProductserviceService, private router: Router) { }

  ngOnInit(): void {
    this.lijstProducten$ = this.productService.getAllProducts();
  }


  koopGames(product: Product){
    this.gekochteGames.push(product);
    console.log(this.gekochteGames);
    this.teBetalenGames.emit(this.gekochteGames)
  }

  selecteerProduct(product: Product){
    this.router.navigate(['/product-detail',product.name])
  }
}
