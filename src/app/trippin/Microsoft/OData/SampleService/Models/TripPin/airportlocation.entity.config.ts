import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
//#endregion

export const AirportLocationEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.AirportLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  annotations: [],
  fields: {
    Loc: {type: 'Object', nullable: false, srid: 4326}
  }
} as EntityConfig<AirportLocation>;