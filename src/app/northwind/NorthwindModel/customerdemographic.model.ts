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
import { CustomerDemographic } from './customerdemographic.entity';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { CustomerCollection } from './customer.collection';
//#endregion

@Model()
export class CustomerDemographicModel<E extends CustomerDemographic> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CustomerTypeID!: string;
  public $$CustomerTypeID() {
    return this.property<string>('CustomerTypeID');
  }
  public $CustomerTypeID() {
    return this.getAttribute<string>('CustomerTypeID') as string;
  }
  
  public CustomerTypeID$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CustomerTypeID', options) as Observable<string>;
  }
  @ModelField()
  CustomerDesc?: string;
  public $$CustomerDesc() {
    return this.property<string>('CustomerDesc');
  }
  public $CustomerDesc() {
    return this.getAttribute<string>('CustomerDesc') as string;
  }
  
  public CustomerDesc$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CustomerDesc', options) as Observable<string>;
  }
  @ModelField()
  Customers?: CustomerCollection<Customer, CustomerModel<Customer>>;
  public $$Customers() {
    return this.navigationProperty<Customer>('Customers');
  }
  public $Customers() {
    return this.getAttribute<Customer>('Customers') as CustomerCollection<Customer, CustomerModel<Customer>>;
  }
  public Customers$$(model: CustomerCollection<Customer, CustomerModel<Customer>> | null, options?: ODataOptions) {
    return this.setReference<Customer>('Customers', model, options);
  }
  public Customers$(options?: ODataQueryArgumentsOptions<Customer>) {
      return this.fetchAttribute<Customer>('Customers', options) as Observable<CustomerCollection<Customer, CustomerModel<Customer>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}