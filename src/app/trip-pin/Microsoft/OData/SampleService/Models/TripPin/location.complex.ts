//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { City } from './city.complex';
import { CityModel } from './city.model';
import { CityCollection } from './city.collection';
//#endregion

//#region ODataApiGen Type
export const LocationType = 'Microsoft.OData.SampleService.Models.TripPin.Location';//#endregion
export interface Location {
  //#region ODataApiGen Properties
  Address: string;
  City: City;
  //#endregion
}