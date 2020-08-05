import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessageRequest } from './eventmessagerequest.entity';
//#endregion

export const EventMessageRequestConfig = {
  name: "eventMessageRequest",
  base: "microsoft.graph.eventMessage",
  annotations: [],
  fields: {
    previousLocation: {type: 'graph.location'},
    previousStartDateTime: {type: 'graph.dateTimeTimeZone'},
    previousEndDateTime: {type: 'graph.dateTimeTimeZone'},
    responseRequested: {type: 'Edm.Boolean'},
    allowNewTimeProposals: {type: 'Edm.Boolean'},
    meetingRequestType: {type: 'graph.meetingRequestType'}
  }
} as EntityConfig<EventMessageRequest>;