//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventLocation } from './event-location.complex';
import { EventLocationModel } from './event-location.model';
import { EventLocationCollection } from './event-location.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EventLocationComplexConfig = {
  name: 'EventLocation',
  base: 'Microsoft.OData.SampleService.Models.TripPin.Location',
  open: true,
  model: EventLocationModel,
  collection: EventLocationCollection,
  fields: {
    BuildingInfo: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EventLocation>;
//#endregion