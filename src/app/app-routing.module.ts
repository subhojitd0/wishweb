import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { SearchComponent } from "./pages/search/search.component";
import { ProductComponent } from "./pages/product/product.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegvalidateComponent } from "./pages/regvalidate/regvalidate.component";

const appRoutes : Routes=[
    {path:'',  component:HomeComponent},
    {path:'category/:id', component:CategoryComponent},
    {path:'search/:data',component:SearchComponent},
    {path:'product/:id',component:ProductComponent},
    {path:'register', component:RegisterComponent},
    {path:'validate', component:RegvalidateComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}