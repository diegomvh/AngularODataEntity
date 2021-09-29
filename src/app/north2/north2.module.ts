//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { DemoServiceService } from './ODataDemo/demoservice.service';
import { ProductsService } from './ODataDemo/products.service';
import { CategoriesService } from './ODataDemo/categories.service';
import { SuppliersService } from './ODataDemo/suppliers.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    DemoServiceService,
    ProductsService,
    CategoriesService,
    SuppliersService//#endregion
  ]
})
export class North2Module { }