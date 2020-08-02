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
export class ProductsService extends ODataService<Product> {
  constructor(protected client: ODataClient) {
    super(client, 'Products', 'NorthwindModel.Product');
  }

  productModel(): ProductModel<Product> {
    return super.model() as ProductModel<Product>;
  }
  
  productsCollection(): ProductCollection<Product, ProductModel<Product>> {
    return super.collection() as ProductCollection<Product, ProductModel<Product>>;
  }
}
