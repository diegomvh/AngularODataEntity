import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.entity';
//#endregion

export const EventLocationConfig = {
  name: "EventLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  annotations: [],
  fields: {
    BuildingInfo: {type: 'Edm.String'}
  }
} as EntityConfig<EventLocation>;