import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { ProductDetail } from './product-detail.entity';
import { ProductModel } from './product.model';
import { ProductDetailModel } from './product-detail.model';
import { ProductCollection } from './product.collection';
//#endregion

export class ProductDetailCollection<E extends ProductDetail, M extends ProductDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}