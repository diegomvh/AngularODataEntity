import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

export interface Employee extends Person {
  //#region ODataApi Properties
  EmployeeID: number;
  HireDate: any;
  Salary: number;
  //#endregion
}