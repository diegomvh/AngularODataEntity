import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrdersQry } from '../../../NorthwindModel/orders_qry.entity';
import { OrdersQryModel } from '../../../NorthwindModel/orders_qry.model';
import { OrdersQryCollection } from '../../../NorthwindModel/orders_qry.collection';
//#endregion

@Injectable()
export class OrdersQriesService extends ODataEntitySetService<OrdersQry> {
  constructor(client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }
  //#region ODataApiGen Model
  ordersQryModel(attrs?: Partial<OrdersQry>): OrdersQryModel<OrdersQry> {
    return this.entity().asModel<OrdersQryModel<OrdersQry>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  ordersQryCollection(models?: Partial<OrdersQry>[]): OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>> {
    return this.entities().asCollection<OrdersQryModel<OrdersQry>, OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
