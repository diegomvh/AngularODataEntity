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
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { CustomerCollection } from './customer.collection';
//#endregion

@Model()
export class CustomerDemographicModel<E extends CustomerDemographic> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CustomerTypeID!: string;
  public $CustomerTypeID() {
    return this.property<string>('CustomerTypeID');
  }
  public getCustomerTypeID(options?: HttpOptions) {
    return this.getValue<string>('CustomerTypeID', options) as Observable<string>;
  }
  
  @ModelField()
  CustomerDesc?: string;
  public $CustomerDesc() {
    return this.property<string>('CustomerDesc');
  }
  public getCustomerDesc(options?: HttpOptions) {
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
  public setCustomers(model: CustomerCollection<Customer, CustomerModel<Customer>> | null, options?: HttpOptions) {
    return this.setReference<Customer>('Customers', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}