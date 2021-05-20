import { ODataModel, ODataCollection, HttpOptions, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonCollection } from './person.collection';
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
//#endregion

export class EmployeeCollection<E extends Employee, M extends EmployeeModel<E>> extends PersonCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}