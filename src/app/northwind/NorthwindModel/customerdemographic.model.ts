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
  public $CustomerTypeID() {
    return this.property<string>('CustomerTypeID');
  }
  public getCustomerTypeID(options?: ODataOptions) {
    return this.getValue<string>('CustomerTypeID', options) as Observable<string>;
  }
  
  @ModelField()
  CustomerDesc?: string;
  public $CustomerDesc() {
    return this.property<string>('CustomerDesc');
  }
  public getCustomerDesc(options?: ODataOptions) {
    return this.getValue<string>('CustomerDesc', options) as Observable<string>;
  }
  
  @ModelField()
  Customers?: CustomerCollection<Customer, CustomerModel<Customer>>;
  public $Customers() {
    return this.navigationProperty<Customer>('Customers');
  }
  public getCustomers() {
    return this.getReference<Customer>('Customers') as CustomerCollection<Customer, CustomerModel<Customer>>;
  }
  public setCustomers(model: CustomerCollection<Customer, CustomerModel<Customer>> | null, options?: ODataOptions) {
    return this.setReference<Customer>('Customers', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}