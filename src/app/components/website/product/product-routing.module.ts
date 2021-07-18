import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    {
        path: 'product',
        component: ProductListComponent,
        pathMatch: 'full'
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
        pathMatch: 'full'
    },
    {
        path: 'product/edit/:id',
        component: ProductEditComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }