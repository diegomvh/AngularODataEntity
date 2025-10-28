import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { OrderDetail } from './order-detail.entity';
import { OrderDetailModel } from './order-detail.model';
import { OrderDetailCollection } from './order-detail.collection';
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';

export class ProductCollection<E extends Product, M extends ProductModel<E>> extends ODataCollection<E, M> {
  
}
