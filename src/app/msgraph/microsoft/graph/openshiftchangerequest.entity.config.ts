import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
//#endregion

export const OpenShiftChangeRequestConfig = {
  name: "OpenShiftChangeRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  annotations: [],
  fields: {
    openShiftId: {type: 'Edm.String'}
  }
} as EntityConfig<OpenShiftChangeRequest>;