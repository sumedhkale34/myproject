import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServer = "http://localhost:3000/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  GetAll():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.apiServer);
  }
  create(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer,JSON.stringify(product),
     this.httpOptions)
  }
  getById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/' + id)
   
  }
 
  update(id:number, product:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/' + id, JSON.stringify(product), this.httpOptions)
   
  }
  delete(id:number){
    return this.httpClient.delete<Product>(this.apiServer + '/' + id, this.httpOptions)
   
  }
}