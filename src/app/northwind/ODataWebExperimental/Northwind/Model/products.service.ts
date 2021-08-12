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
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Category } from '../../../NorthwindModel/category.entity';
import { OrderDetail } from '../../../NorthwindModel/order_detail.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
import { CategoryModel } from '../../../NorthwindModel/category.model';
import { OrderDetailModel } from '../../../NorthwindModel/order_detail.model';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { SupplierModel } from '../../../NorthwindModel/supplier.model';
import { CategoryCollection } from '../../../NorthwindModel/category.collection';
import { OrderDetailCollection } from '../../../NorthwindModel/order_detail.collection';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
import { SupplierCollection } from '../../../NorthwindModel/supplier.collection';
//#endregion

@Injectable()
export class ProductsService extends ODataEntitySetService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }
  //#region ODataApi Model
  productModel(attrs?: Partial<Product>): ProductModel<Product> {
    return this.entity().asModel<ProductModel<Product>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  productCollection(models?: Partial<Product>[]): ProductCollection<Product, ProductModel<Product>> {
    return this.entities().asCollection<ProductModel<Product>, ProductCollection<Product, ProductModel<Product>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public category(key: EntityKey<Product>): ODataNavigationPropertyResource<Category> { 
    return this.entity(key).navigationProperty<Category>('Category'); 
  }
  public fetchCategory(key: EntityKey<Product>, options?: HttpQueryOptions<Category>) {
    return this.fetchNavigationProperty<Category>(
      this.category(key), 
      'entity', options) as Observable<ODataEntity<Category>>;
  }
  public setCategoryAsCategory(key: EntityKey<Product>, target: ODataEntityResource<ODataEntity<Category>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.category(key).reference()
      .set(target, {etag});
  }
  public unsetCategoryAsCategory(key: EntityKey<Product>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Category>>, etag?: string} = {}): Observable<any> {
    return this.category(key).reference()
      .unset({etag});
  }
  public order_Details(key: EntityKey<Product>): ODataNavigationPropertyResource<OrderDetail> { 
    return this.entity(key).navigationProperty<OrderDetail>('Order_Details'); 
  }
  public fetchOrder_Details(key: EntityKey<Product>, options?: HttpQueryOptions<OrderDetail>) {
    return this.fetchNavigationProperty<OrderDetail>(
      this.order_Details(key), 
      'entities', options) as Observable<ODataEntities<OrderDetail>>;
  }
  public addOrderDetailToOrder_Details(key: EntityKey<Product>, target: ODataEntityResource<ODataEntities<OrderDetail>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.order_Details(key).reference()
      .add(target);
  }
  public removeOrderDetailFromOrder_Details(key: EntityKey<Product>, {target, etag}: {target?: ODataEntityResource<ODataEntities<OrderDetail>>, etag?: string} = {}): Observable<any> {
    return this.order_Details(key).reference()
      .remove(target);
  }
  public supplier(key: EntityKey<Product>): ODataNavigationPropertyResource<Supplier> { 
    return this.entity(key).navigationProperty<Supplier>('Supplier'); 
  }
  public fetchSupplier(key: EntityKey<Product>, options?: HttpQueryOptions<Supplier>) {
    return this.fetchNavigationProperty<Supplier>(
      this.supplier(key), 
      'entity', options) as Observable<ODataEntity<Supplier>>;
  }
  public setSupplierAsSupplier(key: EntityKey<Product>, target: ODataEntityResource<ODataEntity<Supplier>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.supplier(key).reference()
      .set(target, {etag});
  }
  public unsetSupplierAsSupplier(key: EntityKey<Product>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Supplier>>, etag?: string} = {}): Observable<any> {
    return this.supplier(key).reference()
      .unset({etag});
  }
  //#endregion
}
