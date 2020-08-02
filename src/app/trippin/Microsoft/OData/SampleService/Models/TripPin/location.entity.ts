import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.entity';
//#endregion

export interface Location {
  //#region ODataApi Properties
  Address: string;
  City: City;
  //#endregion
}