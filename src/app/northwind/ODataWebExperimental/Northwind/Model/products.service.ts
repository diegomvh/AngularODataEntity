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
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Category } from '../../../NorthwindModel/category.entity';
import { OrderDetail } from '../../../NorthwindModel/order_detail.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
//#endregion

@Injectable()
export class ProductsService extends ODataService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public category(entity: EntityKey<Product>): ODataNavigationPropertyResource<Category> {
    return this.entity(entity).navigationProperty<Category>('Category');
  }
  public order_Details(entity: EntityKey<Product>): ODataNavigationPropertyResource<OrderDetail> {
    return this.entity(entity).navigationProperty<OrderDetail>('Order_Details');
  }
  public supplier(entity: EntityKey<Product>): ODataNavigationPropertyResource<Supplier> {
    return this.entity(entity).navigationProperty<Supplier>('Supplier');
  }
  //#endregion
}
