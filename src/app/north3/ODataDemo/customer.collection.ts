import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonCollection } from './person.collection';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
//#endregion

export class CustomerCollection<E extends Customer, M extends CustomerModel<E>> extends PersonCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}