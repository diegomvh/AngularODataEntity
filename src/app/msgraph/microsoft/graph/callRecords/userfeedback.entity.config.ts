import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedback } from './userfeedback.entity';
import { UserFeedbackModel } from './userfeedback.model';
import { UserFeedbackCollection } from './userfeedback.collection';
//#endregion

export const UserFeedbackConfig = {
  name: "userFeedback",
  model: UserFeedbackModel,
  collection: UserFeedbackCollection,
  annotations: [],
  fields: {
    rating: {type: 'microsoft.graph.callRecords.userFeedbackRating', nullable: false},
    text: {type: 'Edm.String'},
    tokens: {type: 'microsoft.graph.callRecords.feedbackTokenSet'}
  }
} as EntityConfig<UserFeedback>;