//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airportlocation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AirportLocationComplexConfig = {
  name: 'AirportLocation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  open: true,
  fields: {
    Loc: {type: 'Edm.GeographyPoint', nullable: false, srid: '4326'}
  }
} as StructuredTypeConfig<AirportLocation>;
//#endregion