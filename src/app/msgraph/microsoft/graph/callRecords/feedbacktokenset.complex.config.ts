import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeedbackTokenSet } from './feedbacktokenset.complex';
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
} as StructuredTypeConfig<FeedbackTokenSet>;