import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { tap, map } from 'rxjs';


const productPath: string = "assets/json/gegevens.json";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productPath)
    .pipe(tap(result => console.log('via service: ',result)))
  }

  getByID(name: string){
    console.log("ontvangen in getById:" + name)
    return this.http.get<Product[]>(productPath)
      .pipe(map(results => {const product = results.filter((productiInResultaten: Product) => productiInResultaten.name === name);
        console.log(product)
                                return (product && product.length) ? product[0] : null}))

  }
}
