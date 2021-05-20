﻿import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { ProductModel } from './product.model';
import { ProductDetailModel } from './productdetail.model';
import { ProductCollection } from './product.collection';
//#endregion

export class ProductDetailCollection<E extends ProductDetail, M extends ProductDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}