import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm!: FormGroup;
  constructor(public fb: FormBuilder,public productservice:ProductService){ }
  ngOnInit() {
      this.productForm = this.fb.group({
        id:[],
      name: [''],
      description: [''],
      price: [],
      quantity: [],    
    })
  }
  submitForm() {
    console.log(this.productForm.value)
    this.productservice.create(this.productForm!.value).subscribe(res => {
      console.log('Product created!'),
      console.log(res)
     // this.router.navigateByUrl('/home/')
    });
  }
}
