import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductCollection } from './product.collection';
import { FeaturedProduct } from './featuredproduct.entity';
import { Advertisement } from './advertisement.entity';
import { FeaturedProductModel } from './featuredproduct.model';
import { AdvertisementModel } from './advertisement.model';
import { AdvertisementCollection } from './advertisement.collection';
//#endregion

export class FeaturedProductCollection<E extends FeaturedProduct, M extends FeaturedProductModel<E>> extends ProductCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}