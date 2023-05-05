import { HttpClient } from '@angular/common/http';
import { Product } from './models';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken, Category} from "./models";
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URL = 'http://localhost:8000'
  items: Product[] = [];
  /* . . . */
  constructor(
      private client: HttpClient
  ) {}
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
        `${this.BASE_URL}/api/login/`,
        {username, password}
    )
  }
  addToCart(product: Product) {
    this.items.push(product);
  }
  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(
        `${this.BASE_URL}/api/categories/`
    )
  }
  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.BASE_URL}/api/products/`)
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.client.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  createCategory(categoryName: string): Observable<Category> {
    return this.client.post<Category>(
        `${this.BASE_URL}/api/categories/`,
        {name: categoryName}
    )
  }

  deleteCategory(category_id: number): Observable<any> {
    return this.client.delete(
        `${this.BASE_URL}/api/categories/${category_id}/`
    )
  }
}
