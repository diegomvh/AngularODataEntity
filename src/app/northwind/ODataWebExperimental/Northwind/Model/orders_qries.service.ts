import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { OrdersQry } from '../../../NorthwindModel/orders_qry.entity';
import { OrdersQryModel } from '../../../NorthwindModel/orders_qry.model';
import { OrdersQryCollection } from '../../../NorthwindModel/orders_qry.collection';
//#endregion

@Injectable()
export class OrdersQriesService extends ODataEntitySetService<OrdersQry> {
  constructor(protected client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }

  //#region ODataApi Model
  ordersQryModel(attrs?: Partial<OrdersQry>): OrdersQryModel<OrdersQry> {
    return this.entity().asModel(attrs || {}) as OrdersQryModel<OrdersQry>;
  }
  //#endregion
  //#region ODataApi Collection
  ordersQryCollection(models?: Partial<OrdersQry>[]): OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>> {
    return this.entities().asCollection(models || []) as OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
