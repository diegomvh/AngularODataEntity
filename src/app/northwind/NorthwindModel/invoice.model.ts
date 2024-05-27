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
import { Invoice } from './invoice.entity';
import { InvoiceCollection } from './invoice.collection';
//#endregion

@Model()
export class InvoiceModel<E extends Invoice> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ShipName?: string;
  public $$ShipName() {
    return this.property<string>('ShipName');
  }
  public $ShipName() {
    return this.getAttribute<string>('ShipName') as string;
  }
  
  public ShipName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipName', options) as Observable<string>;
  }
  @ModelField()
  ShipAddress?: string;
  public $$ShipAddress() {
    return this.property<string>('ShipAddress');
  }
  public $ShipAddress() {
    return this.getAttribute<string>('ShipAddress') as string;
  }
  
  public ShipAddress$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipAddress', options) as Observable<string>;
  }
  @ModelField()
  ShipCity?: string;
  public $$ShipCity() {
    return this.property<string>('ShipCity');
  }
  public $ShipCity() {
    return this.getAttribute<string>('ShipCity') as string;
  }
  
  public ShipCity$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipCity', options) as Observable<string>;
  }
  @ModelField()
  ShipRegion?: string;
  public $$ShipRegion() {
    return this.property<string>('ShipRegion');
  }
  public $ShipRegion() {
    return this.getAttribute<string>('ShipRegion') as string;
  }
  
  public ShipRegion$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipRegion', options) as Observable<string>;
  }
  @ModelField()
  ShipPostalCode?: string;
  public $$ShipPostalCode() {
    return this.property<string>('ShipPostalCode');
  }
  public $ShipPostalCode() {
    return this.getAttribute<string>('ShipPostalCode') as string;
  }
  
  public ShipPostalCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipPostalCode', options) as Observable<string>;
  }
  @ModelField()
  ShipCountry?: string;
  public $$ShipCountry() {
    return this.property<string>('ShipCountry');
  }
  public $ShipCountry() {
    return this.getAttribute<string>('ShipCountry') as string;
  }
  
  public ShipCountry$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipCountry', options) as Observable<string>;
  }
  @ModelField()
  CustomerID?: string;
  public $$CustomerID() {
    return this.property<string>('CustomerID');
  }
  public $CustomerID() {
    return this.getAttribute<string>('CustomerID') as string;
  }
  
  public CustomerID$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CustomerID', options) as Observable<string>;
  }
  @ModelField()
  CustomerName!: string;
  public $$CustomerName() {
    return this.property<string>('CustomerName');
  }
  public $CustomerName() {
    return this.getAttribute<string>('CustomerName') as string;
  }
  
  public CustomerName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CustomerName', options) as Observable<string>;
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
  Salesperson!: string;
  public $$Salesperson() {
    return this.property<string>('Salesperson');
  }
  public $Salesperson() {
    return this.getAttribute<string>('Salesperson') as string;
  }
  
  public Salesperson$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Salesperson', options) as Observable<string>;
  }
  @ModelField()
  OrderID!: number;
  public $$OrderID() {
    return this.property<number>('OrderID');
  }
  public $OrderID() {
    return this.getAttribute<number>('OrderID') as number;
  }
  
  public OrderID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('OrderID', options) as Observable<number>;
  }
  @ModelField()
  OrderDate?: Date;
  public $$OrderDate() {
    return this.property<Date>('OrderDate');
  }
  public $OrderDate() {
    return this.getAttribute<Date>('OrderDate') as Date;
  }
  
  public OrderDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('OrderDate', options) as Observable<Date>;
  }
  @ModelField()
  RequiredDate?: Date;
  public $$RequiredDate() {
    return this.property<Date>('RequiredDate');
  }
  public $RequiredDate() {
    return this.getAttribute<Date>('RequiredDate') as Date;
  }
  
  public RequiredDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('RequiredDate', options) as Observable<Date>;
  }
  @ModelField()
  ShippedDate?: Date;
  public $$ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public $ShippedDate() {
    return this.getAttribute<Date>('ShippedDate') as Date;
  }
  
  public ShippedDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('ShippedDate', options) as Observable<Date>;
  }
  @ModelField()
  ShipperName!: string;
  public $$ShipperName() {
    return this.property<string>('ShipperName');
  }
  public $ShipperName() {
    return this.getAttribute<string>('ShipperName') as string;
  }
  
  public ShipperName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ShipperName', options) as Observable<string>;
  }
  @ModelField()
  ProductID!: number;
  public $$ProductID() {
    return this.property<number>('ProductID');
  }
  public $ProductID() {
    return this.getAttribute<number>('ProductID') as number;
  }
  
  public ProductID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductID', options) as Observable<number>;
  }
  @ModelField()
  ProductName!: string;
  public $$ProductName() {
    return this.property<string>('ProductName');
  }
  public $ProductName() {
    return this.getAttribute<string>('ProductName') as string;
  }
  
  public ProductName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ProductName', options) as Observable<string>;
  }
  @ModelField()
  UnitPrice!: number;
  public $$UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public $UnitPrice() {
    return this.getAttribute<number>('UnitPrice') as number;
  }
  
  public UnitPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitPrice', options) as Observable<number>;
  }
  @ModelField()
  Quantity!: number;
  public $$Quantity() {
    return this.property<number>('Quantity');
  }
  public $Quantity() {
    return this.getAttribute<number>('Quantity') as number;
  }
  
  public Quantity$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Quantity', options) as Observable<number>;
  }
  @ModelField()
  Discount!: number;
  public $$Discount() {
    return this.property<number>('Discount');
  }
  public $Discount() {
    return this.getAttribute<number>('Discount') as number;
  }
  
  public Discount$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Discount', options) as Observable<number>;
  }
  @ModelField()
  ExtendedPrice?: number;
  public $$ExtendedPrice() {
    return this.property<number>('ExtendedPrice');
  }
  public $ExtendedPrice() {
    return this.getAttribute<number>('ExtendedPrice') as number;
  }
  
  public ExtendedPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ExtendedPrice', options) as Observable<number>;
  }
  @ModelField()
  Freight?: number;
  public $$Freight() {
    return this.property<number>('Freight');
  }
  public $Freight() {
    return this.getAttribute<number>('Freight') as number;
  }
  
  public Freight$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Freight', options) as Observable<number>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}