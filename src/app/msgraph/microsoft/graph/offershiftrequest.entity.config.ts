import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { OfferShiftRequestCollection } from './offershiftrequest.collection';
//#endregion

export const OfferShiftRequestConfig = {
  name: "offerShiftRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  model: OfferShiftRequestModel,
  collection: OfferShiftRequestCollection,
  annotations: [],
  fields: {
    recipientActionDateTime: {type: 'Edm.DateTimeOffset'},
    recipientActionMessage: {type: 'Edm.String'},
    recipientUserId: {type: 'Edm.String'},
    senderShiftId: {type: 'Edm.String'}
  }
} as EntityConfig<OfferShiftRequest>;