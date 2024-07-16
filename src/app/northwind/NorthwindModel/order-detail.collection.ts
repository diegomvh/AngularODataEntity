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
import { OrderDetail } from './order-detail.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { OrderDetailModel } from './order-detail.model';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';
import { OrderCollection } from './order.collection';
import { ProductCollection } from './product.collection';
//#endregion

export class OrderDetailCollection<E extends OrderDetail, M extends OrderDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}