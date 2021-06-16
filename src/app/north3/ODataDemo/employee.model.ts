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
import { PersonModel } from './person.model';
import { Employee } from './employee.entity';
import { EmployeeCollection } from './employee.collection';
//#endregion

@Model()
export class EmployeeModel<E extends Employee> extends PersonModel<E> {
  //#region ODataApi Properties
  @ModelField()
  EmployeeID!: number;
  
  
  @ModelField()
  HireDate!: any;
  
  
  @ModelField()
  Salary!: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}