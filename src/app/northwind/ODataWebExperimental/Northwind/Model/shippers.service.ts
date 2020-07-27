import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
//#endregion

@Injectable()
export class ShippersService extends ODataEntityService<Shipper> {
  static path: string = 'Shippers';
  static type: string = 'ODataWebExperimental.Northwind.Model.Shippers';
  static entityType: string = 'NorthwindModel.Shipper';

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
