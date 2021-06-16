//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { EventsService } from './events.service';
//#endregion

//#region ODataApi EntitySetConfig
export const EventsServiceEntitySetConfig = {
  name: "Events",
  entityType: "CBS.Website.ODataApi.Models.CalendarEvent",
  service: EventsService
} as EntitySetConfig;
//#endregion