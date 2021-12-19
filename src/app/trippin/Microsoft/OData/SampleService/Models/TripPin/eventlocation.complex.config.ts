//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventLocation } from './eventlocation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventLocationComplexConfig = {
  name: 'EventLocation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  open: true,
  fields: {
    BuildingInfo: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EventLocation>;
//#endregion