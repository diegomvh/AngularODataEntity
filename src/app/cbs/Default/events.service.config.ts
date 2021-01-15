import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventsService } from './events.service';
//#endregion

//#region ODataApi EntitySetConfig
export const EventsConfig = {
  name: "Events",
  entityType: "CBS.Website.ODataApi.Models.CalendarEvent",
  service: EventsService,
  annotations: []
} as EntitySetConfig;
//#endregion