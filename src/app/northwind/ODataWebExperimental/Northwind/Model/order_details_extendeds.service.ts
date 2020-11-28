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

  //#region ODataApi Model
  orderDetailsExtendedModel(): OrderDetailsExtendedModel<OrderDetailsExtended> {
    return this.entity().asModel() as OrderDetailsExtendedModel<OrderDetailsExtended>;
  }
  //#endregion
  //#region ODataApi Collection
  orderDetailsExtendedCollection(): OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>> {
    return this.entities().asCollection() as OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
