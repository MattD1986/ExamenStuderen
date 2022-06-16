import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/core/productservice.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  name: string;
  product: Product;

  constructor(private productService: ProductserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => this.name = parameters.get('name'));
    this.productService.getByID(this.name).subscribe((product:Product) => this.product = product)
  }

}
