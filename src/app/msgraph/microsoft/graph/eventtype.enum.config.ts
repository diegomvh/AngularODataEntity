import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventType } from './eventtype.enum';
//#endregion

export const EventTypeConfig = {
  name: "EventType",
  members: EventType
} as EnumConfig<EventType>;