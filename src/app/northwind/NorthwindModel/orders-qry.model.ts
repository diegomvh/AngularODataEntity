import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
} from 'angular-odata';

import { OrdersQry } from './orders-qry.entity';

@Model()
export class OrdersQryModel<E extends OrdersQry> extends ODataModel<E> {
  @ModelField()
  declare OrderID: number;
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
  declare CustomerID: string;
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
  declare EmployeeID: number;
  public $$EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public $EmployeeID() {
    return this.getAttribute<number>('EmployeeID') as number;
  }
  
  public EmployeeID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('EmployeeID', options) as Observable<number>;
  }

  @ModelField()
  declare OrderDate: Date;
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
  declare RequiredDate: Date;
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
  declare ShippedDate: Date;
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
  declare ShipVia: number;
  public $$ShipVia() {
    return this.property<number>('ShipVia');
  }
  public $ShipVia() {
    return this.getAttribute<number>('ShipVia') as number;
  }
  
  public ShipVia$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ShipVia', options) as Observable<number>;
  }

  @ModelField()
  declare Freight: number;
  public $$Freight() {
    return this.property<number>('Freight');
  }
  public $Freight() {
    return this.getAttribute<number>('Freight') as number;
  }
  
  public Freight$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Freight', options) as Observable<number>;
  }

  @ModelField()
  declare ShipName: string;
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
  declare ShipAddress: string;
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
  declare ShipCity: string;
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
  declare ShipRegion: string;
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
  declare ShipPostalCode: string;
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
  declare ShipCountry: string;
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
  declare CompanyName: string;
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
  declare Address: string;
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
  declare City: string;
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
  declare Region: string;
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
  declare PostalCode: string;
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
  declare Country: string;
  public $$Country() {
    return this.property<string>('Country');
  }
  public $Country() {
    return this.getAttribute<string>('Country') as string;
  }
  
  public Country$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Country', options) as Observable<string>;
  }

  
  
  
}