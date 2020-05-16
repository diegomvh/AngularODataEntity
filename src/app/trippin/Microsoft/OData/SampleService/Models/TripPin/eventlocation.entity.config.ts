import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.entity';
//#endregion

export const EventLocationEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.EventLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  annotations: [],
  fields: {
    BuildingInfo: {type: 'string'}
  }
} as EntityConfig<EventLocation>;