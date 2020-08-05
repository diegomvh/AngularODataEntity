import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserActivity } from './useractivity.entity';
//#endregion

export const UserActivityConfig = {
  name: "UserActivity",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    visualElements: {type: 'graph.visualInfo', nullable: false},
    activitySourceHost: {type: 'Edm.String', nullable: false},
    activationUrl: {type: 'Edm.String', nullable: false},
    appActivityId: {type: 'Edm.String', nullable: false},
    appDisplayName: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    fallbackUrl: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    userTimezone: {type: 'Edm.String'},
    contentInfo: {type: 'graph.Json'},
    status: {type: 'graph.status'},
    historyItems: {type: 'graph.activityHistoryItem', collection: true, navigation: true}
  }
} as EntityConfig<UserActivity>;