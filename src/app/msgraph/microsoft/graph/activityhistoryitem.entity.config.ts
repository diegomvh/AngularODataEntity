import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityHistoryItem } from './activityhistoryitem.entity';
//#endregion

export const ActivityHistoryItemConfig = {
  name: "activityHistoryItem",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    status: {type: 'graph.status'},
    activeDurationSeconds: {type: 'Edm.Int32'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastActiveDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    startedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userTimezone: {type: 'Edm.String'},
    activity: {type: 'graph.userActivity', navigation: true}
  }
} as EntityConfig<ActivityHistoryItem>;