import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export const ScheduleChangeRequestConfig = {
  name: "ScheduleChangeRequest",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    assignedTo: {type: 'graph.scheduleChangeRequestActor'},
    state: {type: 'graph.scheduleChangeState'},
    senderMessage: {type: 'Edm.String'},
    senderDateTime: {type: 'Edm.DateTimeOffset'},
    managerActionMessage: {type: 'Edm.String'},
    managerActionDateTime: {type: 'Edm.DateTimeOffset'},
    senderUserId: {type: 'Edm.String'},
    managerUserId: {type: 'Edm.String'}
  }
} as EntityConfig<ScheduleChangeRequest>;