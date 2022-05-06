import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products!:Product[];
  constructor(public productservice:ProductService) { 
  productservice.GetAll().subscribe((data)=>{
    this.products=data;
    console.log(data);
  })
}

  ngOnInit(): void {
  }
  delete(productId:number)
  {
    this.productservice.delete(productId).subscribe();
  }

}
