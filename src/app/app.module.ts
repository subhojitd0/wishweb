import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductComponent } from './pages/product/product.component'
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { RegisterComponent } from './pages/register/register.component';
import { RegvalidateComponent } from './pages/regvalidate/regvalidate.component';
import { CartComponent } from './pages/cart/cart.component';
import { PasswordgenComponent } from './pages/passwordgen/passwordgen.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { PersonalComponent } from './pages/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    SearchComponent,
    ProductComponent,
    RegisterComponent,
    RegvalidateComponent,
    CartComponent,
    PasswordgenComponent,
    ProfileComponent,
    SubcategoryComponent,
    CorporateComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SidebarModule,
    ButtonModule,
    TreeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
