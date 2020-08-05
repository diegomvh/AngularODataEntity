import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
//#endregion

export const OfferShiftRequestConfig = {
  name: "offerShiftRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  annotations: [],
  fields: {
    recipientActionMessage: {type: 'Edm.String'},
    recipientActionDateTime: {type: 'Edm.DateTimeOffset'},
    senderShiftId: {type: 'Edm.String'},
    recipientUserId: {type: 'Edm.String'}
  }
} as EntityConfig<OfferShiftRequest>;