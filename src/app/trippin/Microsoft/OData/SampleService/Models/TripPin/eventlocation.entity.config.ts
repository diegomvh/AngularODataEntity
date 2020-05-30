import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventLocation } from './eventlocation.entity';
//#endregion

export const EventLocationEntityConfig = {
  name: "EventLocation",
  base: "",
  annotations: [],
  fields: {
    BuildingInfo: {type: 'string'}
  }
} as EntityConfig<EventLocation>;