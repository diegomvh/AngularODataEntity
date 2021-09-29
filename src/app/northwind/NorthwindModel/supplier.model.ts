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
  public $SupplierID() {
    return this.property<number>('SupplierID');
  }
  public getSupplierID(options?: ODataOptions) {
    return this.getValue<number>('SupplierID', options) as Observable<number>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: ODataOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
  }
  
  @ModelField()
  ContactName?: string;
  public $ContactName() {
    return this.property<string>('ContactName');
  }
  public getContactName(options?: ODataOptions) {
    return this.getValue<string>('ContactName', options) as Observable<string>;
  }
  
  @ModelField()
  ContactTitle?: string;
  public $ContactTitle() {
    return this.property<string>('ContactTitle');
  }
  public getContactTitle(options?: ODataOptions) {
    return this.getValue<string>('ContactTitle', options) as Observable<string>;
  }
  
  @ModelField()
  Address?: string;
  public $Address() {
    return this.property<string>('Address');
  }
  public getAddress(options?: ODataOptions) {
    return this.getValue<string>('Address', options) as Observable<string>;
  }
  
  @ModelField()
  City?: string;
  public $City() {
    return this.property<string>('City');
  }
  public getCity(options?: ODataOptions) {
    return this.getValue<string>('City', options) as Observable<string>;
  }
  
  @ModelField()
  Region?: string;
  public $Region() {
    return this.property<string>('Region');
  }
  public getRegion(options?: ODataOptions) {
    return this.getValue<string>('Region', options) as Observable<string>;
  }
  
  @ModelField()
  PostalCode?: string;
  public $PostalCode() {
    return this.property<string>('PostalCode');
  }
  public getPostalCode(options?: ODataOptions) {
    return this.getValue<string>('PostalCode', options) as Observable<string>;
  }
  
  @ModelField()
  Country?: string;
  public $Country() {
    return this.property<string>('Country');
  }
  public getCountry(options?: ODataOptions) {
    return this.getValue<string>('Country', options) as Observable<string>;
  }
  
  @ModelField()
  Phone?: string;
  public $Phone() {
    return this.property<string>('Phone');
  }
  public getPhone(options?: ODataOptions) {
    return this.getValue<string>('Phone', options) as Observable<string>;
  }
  
  @ModelField()
  Fax?: string;
  public $Fax() {
    return this.property<string>('Fax');
  }
  public getFax(options?: ODataOptions) {
    return this.getValue<string>('Fax', options) as Observable<string>;
  }
  
  @ModelField()
  HomePage?: string;
  public $HomePage() {
    return this.property<string>('HomePage');
  }
  public getHomePage(options?: ODataOptions) {
    return this.getValue<string>('HomePage', options) as Observable<string>;
  }
  
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public $Products() {
    return this.navigationProperty<Product>('Products');
  }
  public getProducts() {
    return this.getReference<Product>('Products') as ProductCollection<Product, ProductModel<Product>>;
  }
  public setProducts(model: ProductCollection<Product, ProductModel<Product>> | null, options?: ODataOptions) {
    return this.setReference<Product>('Products', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}