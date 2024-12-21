import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';


export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'signin', component: LoginComponent},
    { path: 'category', component: CategoryComponent },
];

