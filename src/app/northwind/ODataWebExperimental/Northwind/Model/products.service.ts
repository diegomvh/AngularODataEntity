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
export class ProductsService extends ODataEntityService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }

  //#region ODataApi Model
  productModel(): ProductModel<Product> {
    return super.model() as ProductModel<Product>;
  }
  //#endregion
  //#region ODataApi Collection
  productCollection(): ProductCollection<Product, ProductModel<Product>> {
    return super.collection() as ProductCollection<Product, ProductModel<Product>>;
  }
  //#endregion
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
