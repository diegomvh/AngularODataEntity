import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
//#endregion

export const PublicTransportationConfig = {
  name: "PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    seatNumber: {name: 'SeatNumber', type: 'Edm.String'}
  }
} as EntityConfig<PublicTransportation>;