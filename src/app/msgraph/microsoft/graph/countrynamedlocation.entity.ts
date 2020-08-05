import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
//#endregion

export interface CountryNamedLocation extends NamedLocation {
  //#region ODataApi Properties
  countriesAndRegions: string[];
  includeUnknownCountriesAndRegions: boolean;
  //#endregion
}