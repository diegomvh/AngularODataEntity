import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
export class OrdersQriesService extends ODataService<OrdersQry> {
  constructor(protected client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }

  ordersQryModel(): OrdersQryModel<OrdersQry> {
    return super.model() as OrdersQryModel<OrdersQry>;
  }
  
  ordersQriesCollection(): OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>> {
    return super.collection() as OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>>;
  }
}
