import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
import { EventLocationCollection } from './eventlocation.collection';
//#endregion

export const EventLocationConfig = {
  name: "EventLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  open: true,
  model: EventLocationModel,
  collection: EventLocationCollection,
  annotations: [],
  fields: {
    BuildingInfo: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EventLocation>;