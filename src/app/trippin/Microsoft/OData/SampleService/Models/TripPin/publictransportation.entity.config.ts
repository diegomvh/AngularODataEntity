//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicTransportation } from './publictransportation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicTransportationEntityConfig = {
  name: 'PublicTransportation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  fields: {
    SeatNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicTransportation>;
//#endregion