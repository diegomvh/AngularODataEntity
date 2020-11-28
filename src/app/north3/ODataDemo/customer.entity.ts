import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

export interface Customer extends Person {
  //#region ODataApi Properties
  TotalExpense: number;
  //#endregion
}