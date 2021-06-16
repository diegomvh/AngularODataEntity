import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { ShipperModel } from '../../../NorthwindModel/shipper.model';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { ShipperCollection } from '../../../NorthwindModel/shipper.collection';
//#endregion

@Injectable()
export class ShippersService extends ODataEntitySetService<Shipper> {
  constructor(protected client: ODataClient) {
    super(client, 'Shippers', 'NorthwindModel.Shipper');
  }
  //#region ODataApi Model
  shipperModel(attrs?: Partial<Shipper>): ShipperModel<Shipper> {
    return this.entity().asModel<ShipperModel<Shipper>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  shipperCollection(models?: Partial<Shipper>[]): ShipperCollection<Shipper, ShipperModel<Shipper>> {
    return this.entities().asCollection<ShipperModel<Shipper>, ShipperCollection<Shipper, ShipperModel<Shipper>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public orders(key: EntityKey<Shipper>): ODataNavigationPropertyResource<Order> { 
    return this.entity(key).navigationProperty<Order>('Orders'); 
  }
  public fetchOrders(key: EntityKey<Shipper>, options?: HttpNavigationPropertyOptions<Order>) {
    return this.fetchNavigationProperty<Order>(
      this.orders(key), 
      'entities', options) as Observable<ODataEntities<Order>>;
  }
  public addOrderToOrders(key: EntityKey<Shipper>, target: ODataEntityResource<ODataEntities<Order>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .add(target);
  }
  public removeOrderFromOrders(key: EntityKey<Shipper>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Order>>, etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .remove(target);
  }
  //#endregion
}
