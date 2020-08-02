import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
//#endregion

export const AirportLocationConfig = {
  name: "AirportLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  open: true,
  annotations: [],
  fields: {
    Loc: {type: 'Edm.GeographyPoint', nullable: false, srid: 4326}
  }
} as EntityConfig<AirportLocation>;