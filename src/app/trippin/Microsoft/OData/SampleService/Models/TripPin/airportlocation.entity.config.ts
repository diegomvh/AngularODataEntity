import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
//#endregion

export const AirportLocationEntityConfig = {
  name: "AirportLocation",
  base: "",
  annotations: [],
  fields: {
    Loc: {type: 'Object', nullable: false, srid: 4326}
  }
} as EntityConfig<AirportLocation>;