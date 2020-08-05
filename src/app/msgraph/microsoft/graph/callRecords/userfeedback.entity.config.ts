import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedback } from './userfeedback.entity';
//#endregion

export const UserFeedbackConfig = {
  name: "UserFeedback",
  annotations: [],
  fields: {
    text: {type: 'Edm.String'},
    rating: {type: 'microsoft.graph.callRecords.userFeedbackRating', nullable: false},
    tokens: {type: 'microsoft.graph.callRecords.feedbackTokenSet'}
  }
} as EntityConfig<UserFeedback>;