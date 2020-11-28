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
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { ShipperModel } from '../../../NorthwindModel/shipper.model';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { ShipperCollection } from '../../../NorthwindModel/shipper.collection';
//#endregion

@Injectable()
export class ShippersService extends ODataEntityService<Shipper> {
  constructor(protected client: ODataClient) {
    super(client, 'Shippers', 'NorthwindModel.Shipper');
  }

  //#region ODataApi Model
  shipperModel(): ShipperModel<Shipper> {
    return this.entity().asModel() as ShipperModel<Shipper>;
  }
  //#endregion
  //#region ODataApi Collection
  shipperCollection(): ShipperCollection<Shipper, ShipperModel<Shipper>> {
    return this.entities().asCollection() as ShipperCollection<Shipper, ShipperModel<Shipper>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public orders(entity: EntityKey<Shipper>): ODataNavigationPropertyResource<Order> {
    return this.entity(entity).navigationProperty<Order>('Orders');
  }
  //#endregion
}
