import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

export class ProductDetailModel<E extends ProductDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  ProductID: number;
  Details?: string;
  Product?: ProductModel<Product>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}