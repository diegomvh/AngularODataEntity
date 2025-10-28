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
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';

export class SupplierCollection<E extends Supplier, M extends SupplierModel<E>> extends ODataCollection<E, M> {
  
}
