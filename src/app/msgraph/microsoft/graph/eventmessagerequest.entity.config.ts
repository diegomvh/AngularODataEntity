import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessageRequest } from './eventmessagerequest.entity';
import { EventMessageRequestModel } from './eventmessagerequest.model';
import { EventMessageRequestCollection } from './eventmessagerequest.collection';
//#endregion

export const EventMessageRequestConfig = {
  name: "eventMessageRequest",
  base: "microsoft.graph.eventMessage",
  model: EventMessageRequestModel,
  collection: EventMessageRequestCollection,
  annotations: [],
  fields: {
    allowNewTimeProposals: {type: 'Edm.Boolean'},
    meetingRequestType: {type: 'graph.meetingRequestType'},
    previousEndDateTime: {type: 'graph.dateTimeTimeZone'},
    previousLocation: {type: 'graph.location'},
    previousStartDateTime: {type: 'graph.dateTimeTimeZone'},
    responseRequested: {type: 'Edm.Boolean'}
  }
} as EntityConfig<EventMessageRequest>;