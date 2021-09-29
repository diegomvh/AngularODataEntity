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
import { PersonModel } from './person.model';
import { Employee } from './employee.entity';
import { EmployeeCollection } from './employee.collection';
//#endregion

@Model()
export class EmployeeModel<E extends Employee> extends PersonModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  EmployeeID!: number;
  public $EmployeeID() {
    return this.property<number>('EmployeeID');
  }
  public getEmployeeID(options?: ODataOptions) {
    return this.getValue<number>('EmployeeID', options) as Observable<number>;
  }
  
  @ModelField()
  HireDate!: any;
  public $HireDate() {
    return this.property<any>('HireDate');
  }
  public getHireDate(options?: ODataOptions) {
    return this.getValue<any>('HireDate', options) as Observable<any>;
  }
  
  @ModelField()
  Salary!: number;
  public $Salary() {
    return this.property<number>('Salary');
  }
  public getSalary(options?: ODataOptions) {
    return this.getValue<number>('Salary', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}