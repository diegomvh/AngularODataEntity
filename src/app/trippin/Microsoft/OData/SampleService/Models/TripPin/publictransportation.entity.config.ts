//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PublicTransportation } from './publictransportation.entity';
import { PublicTransportationModel } from './publictransportation.model';
import { PublicTransportationCollection } from './publictransportation.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PublicTransportationEntityConfig = {
  name: "PublicTransportation",
  base: "Microsoft.OData.SampleService.Models.TripPin.PlanItem",
  model: PublicTransportationModel,
  collection: PublicTransportationCollection,
  fields: {
    SeatNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicTransportation>;
//#endregion