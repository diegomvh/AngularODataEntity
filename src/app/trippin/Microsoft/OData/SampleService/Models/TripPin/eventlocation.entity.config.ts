import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.entity';
//#endregion

export const EventLocationConfig = {
  name: "EventLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  open: true,
  annotations: [],
  fields: {
    buildingInfo: {name: 'BuildingInfo', type: 'Edm.String'}
  }
} as EntityConfig<EventLocation>;