import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginIdentifyComponent } from './features/login/login-identify/login-identify.component';
import { OurStoreComponent } from './features/our-store/our-store/our-store.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { WinkelmandjeComponent } from './features/products/winkelmandje/winkelmandje.component';

const routes: Routes = [
  {path: 'ourstore', component: OurStoreComponent},
  {path: 'products', component: WinkelmandjeComponent},
  {path: 'product-detail/:name', component: ProductDetailComponent},
  {path: 'login', component: LoginIdentifyComponent},
  {path: '', component: OurStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
