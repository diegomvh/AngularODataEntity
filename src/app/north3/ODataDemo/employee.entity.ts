//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

export interface Employee extends Person {
  //#region ODataApiGen Properties
  EmployeeID: number;
  HireDate: any;
  Salary: number;
  //#endregion
}