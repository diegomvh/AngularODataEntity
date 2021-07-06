import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ProductCollection } from './product.collection';
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductModel } from './featuredproduct.model';
//#endregion

export class FeaturedProductCollection<E extends FeaturedProduct, M extends FeaturedProductModel<E>> extends ProductCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}