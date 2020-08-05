import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShift } from './openshift.entity';
//#endregion

export const OpenShiftConfig = {
  name: "OpenShift",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    sharedOpenShift: {type: 'graph.openShiftItem'},
    draftOpenShift: {type: 'graph.openShiftItem'},
    schedulingGroupId: {type: 'Edm.String'}
  }
} as EntityConfig<OpenShift>;