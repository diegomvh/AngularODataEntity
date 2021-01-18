import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { AirportLocationModel } from './airportlocation.model';
import { AirportLocationCollection } from './airportlocation.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const AirportLocationComplexConfig = {
  name: "AirportLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  open: true,
  model: AirportLocationModel,
  collection: AirportLocationCollection,
  annotations: [],
  fields: {
    Loc: {type: 'Edm.GeographyPoint', nullable: false, srid: '4326'}
  }
} as StructuredTypeConfig<AirportLocation>;
//#endregion