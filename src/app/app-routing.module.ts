import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shirts'
  },
  {
    path: 'shirts',
    component: ShirtsComponent
  },
  {
    path: 'buy/:productId',
    component: ProductInfoComponent
  },
  {
    path: '**',
    redirectTo: "shirts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
