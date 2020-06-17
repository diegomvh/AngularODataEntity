﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Category } from '../../../NorthwindModel/category.entity';
import { Order_Detail } from '../../../NorthwindModel/order_detail.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
//#endregion

@Injectable()
export class ProductsService extends ODataEntityService<Product> {
  static path: string = 'Products';
  static type: string = 'ODataWebExperimental.Northwind.Model.Products';
  static entity: string = 'NorthwindModel.Product';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public category(entity: EntityKey<Product>): ODataNavigationPropertyResource<Category> {
    return this.entity(entity).navigationProperty<Category>('Category');
  }
  public order_Details(entity: EntityKey<Product>): ODataNavigationPropertyResource<Order_Detail> {
    return this.entity(entity).navigationProperty<Order_Detail>('Order_Details');
  }
  public supplier(entity: EntityKey<Product>): ODataNavigationPropertyResource<Supplier> {
    return this.entity(entity).navigationProperty<Supplier>('Supplier');
  }
  //#endregion
}