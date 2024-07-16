//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airport-location.complex';
import { AirportLocationModel } from './airport-location.model';
import { AirportLocationCollection } from './airport-location.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AirportLocationComplexConfig = {
  name: 'AirportLocation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  open: true,
  model: AirportLocationModel,
  collection: AirportLocationCollection,
  fields: {
    Loc: {type: 'Edm.GeographyPoint', nullable: false, srid: '4326'}
  }
} as StructuredTypeConfig<AirportLocation>;
//#endregion