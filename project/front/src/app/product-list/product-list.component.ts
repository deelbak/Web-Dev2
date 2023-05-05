import {Component, OnInit} from '@angular/core';

import {Product, products} from '../models';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Array<Product> | undefined;
  constructor(
      private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    // First get the product id from the current route.

    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.products = products.filter((products: { categoryId: number; }) => products.categoryId === categoryIdFromRoute);
  }
  like(product: Product) {
    product.likes++;
  }
  share(url: string, description: string) {
    let encodedUrl = encodeURIComponent(url);
    let encodedText = encodeURIComponent(description);
    window.open("https://t.me/share/url?url="+encodedUrl+"&text=+"+encodedText+"");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  delete(product: Product) {
    let index = products.indexOf(product)
    if (index > -1) { // only splice array when item is found
      products.splice(index, 1);
      window.alert('Product has been deleted');
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
