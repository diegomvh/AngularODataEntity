import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
import { NamedLocationModel } from './namedlocation.model';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export interface CountryNamedLocation extends NamedLocation {
  //#region ODataApi Properties
  countriesAndRegions: string[];
  includeUnknownCountriesAndRegions: boolean;
  //#endregion
}