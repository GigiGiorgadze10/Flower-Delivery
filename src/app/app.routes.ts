// app.route.ts
import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent }, // Use `id` for the route
];
