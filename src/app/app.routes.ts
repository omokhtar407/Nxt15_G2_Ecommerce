import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Features/Layout/main-layout/main-layout.component';
import { NotFoundComponent } from './Features/Pages/not-found/not-found.component';
import { AuthLayoutComponent } from './Features/Layout/auth-layout/auth-layout.component';
import { LoginComponent } from './Features/Auth/login/login.component';
import { RegisterComponent } from './Features/Auth/register/register.component';
import { ResetPassComponent } from './Features/Auth/reset-pass/reset-pass.component';
import { ForgetPassComponent } from './Features/Auth/forget-pass/forget-pass.component';
import { HomeComponent } from './Features/Pages/home/home.component';
import { CartComponent } from './Features/Pages/cart/cart.component';
import { CategoriesComponent } from './Features/Pages/categories/categories.component';
import { ShopComponent } from './Features/Pages/shop/shop.component';
import { WishlistComponent } from './Features/Pages/wishlist/wishlist.component';
import { ProductDetailsComponent } from './Features/Pages/product-details/product-details.component';
import { BrandsComponent } from './Features/Pages/brands/brands.component';

export const routes: Routes = [
  
  { path: '', component: AuthLayoutComponent ,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'reset',component:ResetPassComponent},
    {path:'forget',component:ForgetPassComponent},
  ]},
  { path: '', component: MainLayoutComponent ,children:[
    {path:'',redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'shop',component:ShopComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'product',component:ProductDetailsComponent},
    {path:'brands',component:BrandsComponent},
  ]},
  { path: '**', component: NotFoundComponent },
];
