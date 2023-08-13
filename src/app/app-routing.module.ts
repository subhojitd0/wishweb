import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CategoryComponent } from "./pages/category/category.component";

const appRoutes : Routes=[
    {path:'',  component:HomeComponent},
    {path:'category/:id', component:CategoryComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}