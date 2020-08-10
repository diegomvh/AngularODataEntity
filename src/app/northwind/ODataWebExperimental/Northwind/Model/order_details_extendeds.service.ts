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
import { OrderDetailsExtended } from '../../../NorthwindModel/order_details_extended.entity';
import { OrderDetailsExtendedModel } from '../../../NorthwindModel/order_details_extended.model';
import { OrderDetailsExtendedCollection } from '../../../NorthwindModel/order_details_extended.collection';
//#endregion

@Injectable()
export class OrderDetailsExtendedsService extends ODataEntityService<OrderDetailsExtended> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Details_Extendeds', 'NorthwindModel.Order_Details_Extended');
  }

  orderDetailsExtendedModel(): OrderDetailsExtendedModel<OrderDetailsExtended> {
    return super.model() as OrderDetailsExtendedModel<OrderDetailsExtended>;
  }
  
  orderDetailsExtendedCollection(): OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>> {
    return super.collection() as OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>>;
  }
}
