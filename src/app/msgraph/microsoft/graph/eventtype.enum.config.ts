import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventType } from './eventtype.enum';
//#endregion

export const EventTypeConfig = {
  name: "eventType",
  members: EventType
} as EnumTypeConfig<EventType>;