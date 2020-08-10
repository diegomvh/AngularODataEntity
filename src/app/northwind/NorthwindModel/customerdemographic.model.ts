import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { CustomerCollection } from './customer.collection';
//#endregion

export class CustomerDemographicModel<E extends CustomerDemographic> extends ODataModel<E> {
  //#region ODataApi Properties
  CustomerTypeID: string;
  CustomerDesc?: string;
  Customers?: CustomerCollection<Customer, CustomerModel<Customer>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}