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
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  SupplierID!: number;
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  ContactName?: string;
  
  
  @ModelField()
  ContactTitle?: string;
  
  
  @ModelField()
  Address?: string;
  
  
  @ModelField()
  City?: string;
  
  
  @ModelField()
  Region?: string;
  
  
  @ModelField()
  PostalCode?: string;
  
  
  @ModelField()
  Country?: string;
  
  
  @ModelField()
  Phone?: string;
  
  
  @ModelField()
  Fax?: string;
  
  
  @ModelField()
  HomePage?: string;
  
  
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