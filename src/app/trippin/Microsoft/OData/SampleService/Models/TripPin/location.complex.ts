import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { City } from './city.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
//#endregion

export interface Location {
  //#region ODataApi Properties
  Address: string;
  City: City;
  //#endregion
}