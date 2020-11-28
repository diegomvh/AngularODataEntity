import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { ActivityHistoryItemModel } from './activityhistoryitem.model';
import { ActivityHistoryItemCollection } from './activityhistoryitem.collection';
//#endregion

export const ActivityHistoryItemConfig = {
  name: "activityHistoryItem",
  base: "microsoft.graph.entity",
  model: ActivityHistoryItemModel,
  collection: ActivityHistoryItemCollection,
  annotations: [],
  fields: {
    activeDurationSeconds: {type: 'Edm.Int32'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    lastActiveDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    startedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.status'},
    userTimezone: {type: 'Edm.String'},
    activity: {type: 'graph.userActivity', navigation: true}
  }
} as StructuredTypeConfig<ActivityHistoryItem>;