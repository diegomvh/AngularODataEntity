import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessageResponse } from './eventmessageresponse.entity';
//#endregion

export const EventMessageResponseConfig = {
  name: "eventMessageResponse",
  base: "microsoft.graph.eventMessage",
  annotations: [],
  fields: {
    proposedNewTime: {type: 'graph.timeSlot'},
    responseType: {type: 'graph.responseType'}
  }
} as EntityConfig<EventMessageResponse>;