//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
import { EventLocationCollection } from './eventlocation.collection';
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