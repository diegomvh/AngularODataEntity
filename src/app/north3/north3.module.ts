//#region AngularOData Imports
import { 
  NgModule 
} from '@angular/core';//#endregion

//#region ODataApi Imports
import { DemoServiceService } from './ODataDemo/demoservice.service';
import { ProductsService } from './ODataDemo/products.service';
import { ProductDetailsService } from './ODataDemo/productdetails.service';
import { CategoriesService } from './ODataDemo/categories.service';
import { SuppliersService } from './ODataDemo/suppliers.service';
import { PersonsService } from './ODataDemo/persons.service';
import { PersonDetailsService } from './ODataDemo/persondetails.service';
import { AdvertisementsService } from './ODataDemo/advertisements.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApi Providers
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