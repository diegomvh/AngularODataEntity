import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlertHistoryState } from './alerthistorystate.complex';
import { AlertHistoryStateModel } from './alerthistorystate.model';
import { AlertHistoryStateCollection } from './alerthistorystate.collection';
//#endregion

export const AlertHistoryStateConfig = {
  name: "alertHistoryState",
  model: AlertHistoryStateModel,
  collection: AlertHistoryStateCollection,
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
} as StructuredTypeConfig<AlertHistoryState>;