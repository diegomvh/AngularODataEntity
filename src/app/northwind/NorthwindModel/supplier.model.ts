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
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  SupplierID!: number;
  public $$SupplierID() {
    return this.property<number>('SupplierID');
  }
  public $SupplierID() {
    return this.getAttribute<number>('SupplierID') as number;
  }
  
  public SupplierID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('SupplierID', options) as Observable<number>;
  }
  @ModelField()
  CompanyName?: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }
  @ModelField()
  ContactName?: string;
  public $$ContactName() {
    return this.property<string>('ContactName');
  }
  public $ContactName() {
    return this.getAttribute<string>('ContactName') as string;
  }
  
  public ContactName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactName', options) as Observable<string>;
  }
  @ModelField()
  ContactTitle?: string;
  public $$ContactTitle() {
    return this.property<string>('ContactTitle');
  }
  public $ContactTitle() {
    return this.getAttribute<string>('ContactTitle') as string;
  }
  
  public ContactTitle$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactTitle', options) as Observable<string>;
  }
  @ModelField()
  Address?: string;
  public $$Address() {
    return this.property<string>('Address');
  }
  public $Address() {
    return this.getAttribute<string>('Address') as string;
  }
  
  public Address$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Address', options) as Observable<string>;
  }
  @ModelField()
  City?: string;
  public $$City() {
    return this.property<string>('City');
  }
  public $City() {
    return this.getAttribute<string>('City') as string;
  }
  
  public City$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('City', options) as Observable<string>;
  }
  @ModelField()
  Region?: string;
  public $$Region() {
    return this.property<string>('Region');
  }
  public $Region() {
    return this.getAttribute<string>('Region') as string;
  }
  
  public Region$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Region', options) as Observable<string>;
  }
  @ModelField()
  PostalCode?: string;
  public $$PostalCode() {
    return this.property<string>('PostalCode');
  }
  public $PostalCode() {
    return this.getAttribute<string>('PostalCode') as string;
  }
  
  public PostalCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('PostalCode', options) as Observable<string>;
  }
  @ModelField()
  Country?: string;
  public $$Country() {
    return this.property<string>('Country');
  }
  public $Country() {
    return this.getAttribute<string>('Country') as string;
  }
  
  public Country$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Country', options) as Observable<string>;
  }
  @ModelField()
  Phone?: string;
  public $$Phone() {
    return this.property<string>('Phone');
  }
  public $Phone() {
    return this.getAttribute<string>('Phone') as string;
  }
  
  public Phone$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Phone', options) as Observable<string>;
  }
  @ModelField()
  Fax?: string;
  public $$Fax() {
    return this.property<string>('Fax');
  }
  public $Fax() {
    return this.getAttribute<string>('Fax') as string;
  }
  
  public Fax$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Fax', options) as Observable<string>;
  }
  @ModelField()
  HomePage?: string;
  public $$HomePage() {
    return this.property<string>('HomePage');
  }
  public $HomePage() {
    return this.getAttribute<string>('HomePage') as string;
  }
  
  public HomePage$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('HomePage', options) as Observable<string>;
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