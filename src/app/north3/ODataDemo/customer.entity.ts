//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

//#region ODataApiGen Type
export const CustomerType = 'ODataDemo.Customer';//#endregion
export interface Customer extends Person {
  //#region ODataApiGen Properties
  TotalExpense: number;
  //#endregion
}