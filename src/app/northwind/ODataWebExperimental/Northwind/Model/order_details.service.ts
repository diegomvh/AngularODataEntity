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
import { Order_Detail } from '../../../NorthwindModel/order_detail.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Product } from '../../../NorthwindModel/product.entity';
//#endregion

@Injectable()
export class Order_DetailsService extends ODataService<Order_Detail> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Details', 'NorthwindModel.Order_Detail');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public order(entity: EntityKey<Order_Detail>): ODataNavigationPropertyResource<Order> {
    return this.entity(entity).navigationProperty<Order>('Order');
  }
  public product(entity: EntityKey<Order_Detail>): ODataNavigationPropertyResource<Product> {
    return this.entity(entity).navigationProperty<Product>('Product');
  }
  //#endregion
}
