import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProductModel } from './product.model';
import { FeaturedProduct } from './featuredproduct.entity';
import { FeaturedProductCollection } from './featuredproduct.collection';
//#endregion

export class FeaturedProductModel<E extends FeaturedProduct> extends ProductModel<E> {
  //#region ODataApi Properties
  Advertisement?: AdvertisementModel<Advertisement>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}