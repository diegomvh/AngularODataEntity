import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonModel } from './person.model';
import { Employee } from './employee.entity';
import { EmployeeCollection } from './employee.collection';
//#endregion

export class EmployeeModel<E extends Employee> extends PersonModel<E> {
  //#region ODataApi Properties
  EmployeeID!: number;
  HireDate!: any;
  Salary!: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}