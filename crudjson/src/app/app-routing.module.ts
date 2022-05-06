import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: 'viewproducts', component: ViewProductsComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'update/:productid', component: UpdateComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
