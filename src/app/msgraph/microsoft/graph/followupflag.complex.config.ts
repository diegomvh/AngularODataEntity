import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlag } from './followupflag.complex';
import { FollowupFlagModel } from './followupflag.model';
import { FollowupFlagCollection } from './followupflag.collection';
//#endregion

export const FollowupFlagConfig = {
  name: "followupFlag",
  model: FollowupFlagModel,
  collection: FollowupFlagCollection,
  annotations: [],
  fields: {
    completedDateTime: {type: 'graph.dateTimeTimeZone'},
    dueDateTime: {type: 'graph.dateTimeTimeZone'},
    flagStatus: {type: 'graph.followupFlagStatus'},
    startDateTime: {type: 'graph.dateTimeTimeZone'}
  }
} as StructuredTypeConfig<FollowupFlag>;