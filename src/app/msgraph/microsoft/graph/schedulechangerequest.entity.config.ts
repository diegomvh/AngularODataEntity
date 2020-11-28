import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
//#endregion

export const ScheduleChangeRequestConfig = {
  name: "scheduleChangeRequest",
  base: "microsoft.graph.changeTrackedEntity",
  model: ScheduleChangeRequestModel,
  collection: ScheduleChangeRequestCollection,
  annotations: [],
  fields: {
    assignedTo: {type: 'graph.scheduleChangeRequestActor'},
    managerActionDateTime: {type: 'Edm.DateTimeOffset'},
    managerActionMessage: {type: 'Edm.String'},
    managerUserId: {type: 'Edm.String'},
    senderDateTime: {type: 'Edm.DateTimeOffset'},
    senderMessage: {type: 'Edm.String'},
    senderUserId: {type: 'Edm.String'},
    state: {type: 'graph.scheduleChangeState'}
  }
} as EntityConfig<ScheduleChangeRequest>;