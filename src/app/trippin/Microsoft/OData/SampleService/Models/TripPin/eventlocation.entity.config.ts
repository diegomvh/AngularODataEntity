import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.entity';
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
} as EntityConfig<EventLocation>;