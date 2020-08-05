import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FeedbackTokenSet } from './feedbacktokenset.entity';
//#endregion

export const FeedbackTokenSetConfig = {
  name: "feedbackTokenSet",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<FeedbackTokenSet>;