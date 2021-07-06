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
  
  
  @ModelField()
  CustomerDesc?: string;
  
  
  @ModelField()
  Customers?: CustomerCollection<Customer, CustomerModel<Customer>>;
  public getCustomers({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Customer>('Customers', {asEntity, ...options}) as Observable<CustomerCollection<Customer, CustomerModel<Customer>>>;
  }
  public setCustomers(model: CustomerCollection<Customer, CustomerModel<Customer>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Customer>('Customers', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}