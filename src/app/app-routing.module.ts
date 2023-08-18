import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";
import { SearchComponent } from "./pages/search/search.component";

const appRoutes : Routes=[
    {path:'',  component:HomeComponent},
    {path:'category/:id', component:CategoryComponent},
    {path:'search/:data',component:SearchComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}