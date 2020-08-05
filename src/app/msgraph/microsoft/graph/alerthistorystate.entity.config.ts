import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertHistoryState } from './alerthistorystate.entity';
//#endregion

export const AlertHistoryStateConfig = {
  name: "AlertHistoryState",
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    assignedTo: {type: 'Edm.String'},
    comments: {type: 'Edm.String', collection: true},
    feedback: {type: 'graph.alertFeedback'},
    status: {type: 'graph.alertStatus'},
    updatedDateTime: {type: 'Edm.DateTimeOffset'},
    user: {type: 'Edm.String'}
  }
} as EntityConfig<AlertHistoryState>;