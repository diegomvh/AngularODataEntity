import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Properties
  @ModelField()
  ID!: number;
  public $$ID() {
    return this.property<number>('ID');
  }
  public $ID() {
    return this.getAttribute<number>('ID') as number;
  }
  
  public ID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ID', options) as Observable<number>;
  }
  @ModelField()
  Name?: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }
  @ModelField()
  Address?: AddressModel<Address>;
  public $$Address() {
    return this.property<AddressModel<Address>>('Address');
  }
  public $Address() {
    return this.getAttribute<AddressModel<Address>>('Address') as AddressModel<Address>;
  }
  
  public Address$(options?: ODataQueryArgumentsOptions<AddressModel<Address>>) {
    return this.fetchAttribute<AddressModel<Address>>('Address', options) as Observable<AddressModel<Address>>;
  }
  @ModelField()
  Location?: any;
  public $$Location() {
    return this.property<any>('Location');
  }
  public $Location() {
    return this.getAttribute<any>('Location') as any;
  }
  
  public Location$(options?: ODataQueryArgumentsOptions<any>) {
    return this.fetchAttribute<any>('Location', options) as Observable<any>;
  }
  @ModelField()
  Concurrency!: number;
  public $$Concurrency() {
    return this.property<number>('Concurrency');
  }
  public $Concurrency() {
    return this.getAttribute<number>('Concurrency') as number;
  }
  
  public Concurrency$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Concurrency', options) as Observable<number>;
  }
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public $$Products() {
    return this.navigationProperty<Product>('Products');
  }
  public $Products() {
    return this.getAttribute<Product>('Products') as ProductCollection<Product, ProductModel<Product>>;
  }
  public Products$$(model: ProductCollection<Product, ProductModel<Product>> | null, options?: ODataOptions) {
    return this.setReference<Product>('Products', model, options);
  }
  public Products$(options?: ODataQueryArgumentsOptions<Product>) {
      return this.fetchAttribute<Product>('Products', options) as Observable<ProductCollection<Product, ProductModel<Product>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}