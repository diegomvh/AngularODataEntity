//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EventsService } from './events.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const EventsServiceEntitySetConfig = {
  name: 'Events',
  entityType: 'CBS.Website.ODataApi.Models.CalendarEvent',
  service: EventsService
} as EntitySetConfig;
//#endregion