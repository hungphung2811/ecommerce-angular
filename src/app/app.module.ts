import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/website/common/footer/footer.component';
import { HeaderComponent } from './components/website/common/header/header.component';
import { LayoutComponent } from './components/website/common/layout/layout.component';
import { NotFoundComponent } from './components/website/common/not-found/not-found.component';
import { ProductModule } from './components/website/product/product.module';
import { AboutComponent } from './components/website/site/about/about.component';
import { ContactComponent } from './components/website/site/contact/contact.component';
import { HomeComponent } from './components/website/site/home/home.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LayoutComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
