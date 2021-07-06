import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { ProductModel } from './product.model';
import { AddressCollection } from './address.collection';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  Address!: AddressModel<Address>;
  
  
  @ModelField()
  Concurrency!: number;
  
  
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public getProducts({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Product>('Products', {asEntity, ...options}) as Observable<ProductCollection<Product, ProductModel<Product>>>;
  }
  public setProducts(model: ProductCollection<Product, ProductModel<Product>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Product>('Products', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}