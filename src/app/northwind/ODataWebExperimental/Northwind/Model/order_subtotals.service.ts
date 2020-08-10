import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
import { OrderSubtotal } from '../../../NorthwindModel/order_subtotal.entity';
import { OrderSubtotalModel } from '../../../NorthwindModel/order_subtotal.model';
import { OrderSubtotalCollection } from '../../../NorthwindModel/order_subtotal.collection';
//#endregion

@Injectable()
export class OrderSubtotalsService extends ODataEntityService<OrderSubtotal> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Subtotals', 'NorthwindModel.Order_Subtotal');
  }

  orderSubtotalModel(): OrderSubtotalModel<OrderSubtotal> {
    return super.model() as OrderSubtotalModel<OrderSubtotal>;
  }
  
  orderSubtotalCollection(): OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>> {
    return super.collection() as OrderSubtotalCollection<OrderSubtotal, OrderSubtotalModel<OrderSubtotal>>;
  }
}
