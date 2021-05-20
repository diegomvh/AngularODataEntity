import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrderDetail } from './order_detail.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { OrderDetailModel } from './order_detail.model';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';
import { OrderCollection } from './order.collection';
import { ProductCollection } from './product.collection';
//#endregion

export class OrderDetailCollection<E extends OrderDetail, M extends OrderDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}