import {Component, OnInit} from '@angular/core';
import { CartService} from "../cart.service";
import {Category} from "../models";

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
  logged: boolean = false;
  username: string = '';
  password: string = '';
  categories: Category[] = [];
  newCategory: string = '';
  isactive: boolean = true;
  constructor(private categoryService: CartService) {
  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.getCategories();
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
      this.getCategories();
    });
  }
  logout() {
    localStorage.removeItem('token');
    // Request to the Django
    this.logged = false;
  }
  addCategory() {
    this.categoryService.createCategory(this.newCategory).subscribe((category) => {
      this.categories.push(category);
      this.newCategory = '';
    });
  }

  deleteCategory(category_id: number) {
    this.categoryService.deleteCategory(category_id).subscribe((data) => {
      this.categories = this.categories.filter((category) => category.id !== category_id);
    });
  }

}
