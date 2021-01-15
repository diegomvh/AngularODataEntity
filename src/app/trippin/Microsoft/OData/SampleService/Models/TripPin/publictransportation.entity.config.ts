import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationModel } from './publictransportation.model';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PublicTransportationConfig = {
  name: "PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  model: PublicTransportationModel,
  collection: PublicTransportationCollection,
  annotations: [],
  fields: {
    SeatNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicTransportation>;
//#endregion