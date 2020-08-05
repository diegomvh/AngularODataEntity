import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlag } from './followupflag.entity';
//#endregion

export const FollowupFlagConfig = {
  name: "FollowupFlag",
  annotations: [],
  fields: {
    completedDateTime: {type: 'graph.dateTimeTimeZone'},
    dueDateTime: {type: 'graph.dateTimeTimeZone'},
    startDateTime: {type: 'graph.dateTimeTimeZone'},
    flagStatus: {type: 'graph.followupFlagStatus'}
  }
} as EntityConfig<FollowupFlag>;