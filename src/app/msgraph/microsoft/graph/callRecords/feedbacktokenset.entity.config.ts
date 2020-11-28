import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeedbackTokenSet } from './feedbacktokenset.entity';
import { FeedbackTokenSetModel } from './feedbacktokenset.model';
import { FeedbackTokenSetCollection } from './feedbacktokenset.collection';
//#endregion

export const FeedbackTokenSetConfig = {
  name: "feedbackTokenSet",
  open: true,
  model: FeedbackTokenSetModel,
  collection: FeedbackTokenSetCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<FeedbackTokenSet>;