﻿//#region ODataApiGen ODataImports
import {
  NgModule
} from '@angular/core';//#endregion

//#region ODataApiGen Imports
import { DemoServiceService } from './ODataDemo/demo-service.service';
import { ProductsService } from './ODataDemo/products.service';
import { ProductDetailsService } from './ODataDemo/product-details.service';
import { CategoriesService } from './ODataDemo/categories.service';
import { SuppliersService } from './ODataDemo/suppliers.service';
import { PersonsService } from './ODataDemo/persons.service';
import { PersonDetailsService } from './ODataDemo/person-details.service';
import { AdvertisementsService } from './ODataDemo/advertisements.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApiGen Providers
    DemoServiceService,
    ProductsService,
    ProductDetailsService,
    CategoriesService,
    SuppliersService,
    PersonsService,
    PersonDetailsService,
    AdvertisementsService//#endregion
  ]
})
export class North3Module { }