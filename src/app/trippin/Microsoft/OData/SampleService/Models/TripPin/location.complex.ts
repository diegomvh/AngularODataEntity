//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { City } from './city.complex';
//#endregion

export interface Location {
  //#region ODataApiGen Properties
  Address: string;
  City: City;
  //#endregion
}