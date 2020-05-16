import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
//#endregion

export const PublicTransportationEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  annotations: [],
  fields: {
    SeatNumber: {type: 'string'}
  }
} as EntityConfig<PublicTransportation>;