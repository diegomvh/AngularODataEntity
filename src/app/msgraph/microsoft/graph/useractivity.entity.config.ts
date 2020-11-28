import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserActivity } from './useractivity.entity';
import { UserActivityModel } from './useractivity.model';
import { UserActivityCollection } from './useractivity.collection';
//#endregion

export const UserActivityConfig = {
  name: "userActivity",
  base: "microsoft.graph.entity",
  model: UserActivityModel,
  collection: UserActivityCollection,
  annotations: [],
  fields: {
    activationUrl: {type: 'Edm.String', nullable: false},
    activitySourceHost: {type: 'Edm.String', nullable: false},
    appActivityId: {type: 'Edm.String', nullable: false},
    appDisplayName: {type: 'Edm.String'},
    contentInfo: {type: 'graph.Json'},
    contentUrl: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    fallbackUrl: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    status: {type: 'graph.status'},
    userTimezone: {type: 'Edm.String'},
    visualElements: {type: 'graph.visualInfo', nullable: false},
    historyItems: {type: 'graph.activityHistoryItem', collection: true, navigation: true}
  }
} as EntityConfig<UserActivity>;