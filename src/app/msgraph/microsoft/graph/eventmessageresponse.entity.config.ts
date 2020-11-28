import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessageResponse } from './eventmessageresponse.entity';
import { EventMessageResponseModel } from './eventmessageresponse.model';
import { EventMessageResponseCollection } from './eventmessageresponse.collection';
//#endregion

export const EventMessageResponseConfig = {
  name: "eventMessageResponse",
  base: "microsoft.graph.eventMessage",
  model: EventMessageResponseModel,
  collection: EventMessageResponseCollection,
  annotations: [],
  fields: {
    proposedNewTime: {type: 'graph.timeSlot'},
    responseType: {type: 'graph.responseType'}
  }
} as EntityConfig<EventMessageResponse>;