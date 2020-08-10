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
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { SupplierModel } from '../../../NorthwindModel/supplier.model';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
import { SupplierCollection } from '../../../NorthwindModel/supplier.collection';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntityService<Supplier> {
  constructor(protected client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }

  supplierModel(): SupplierModel<Supplier> {
    return super.model() as SupplierModel<Supplier>;
  }
  
  supplierCollection(): SupplierCollection<Supplier, SupplierModel<Supplier>> {
    return super.collection() as SupplierCollection<Supplier, SupplierModel<Supplier>>;
  }
}
