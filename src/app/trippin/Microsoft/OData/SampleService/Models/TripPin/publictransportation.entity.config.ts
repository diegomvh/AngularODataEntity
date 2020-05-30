import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
//#endregion

export const PublicTransportationEntityConfig = {
  name: "PublicTransportation",
  base: "",
  annotations: [],
  fields: {
    SeatNumber: {type: 'string'}
  }
} as EntityConfig<PublicTransportation>;