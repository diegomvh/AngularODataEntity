import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShift } from './openshift.entity';
import { OpenShiftModel } from './openshift.model';
import { OpenShiftCollection } from './openshift.collection';
//#endregion

export const OpenShiftConfig = {
  name: "openShift",
  base: "microsoft.graph.changeTrackedEntity",
  model: OpenShiftModel,
  collection: OpenShiftCollection,
  annotations: [],
  fields: {
    draftOpenShift: {type: 'graph.openShiftItem'},
    schedulingGroupId: {type: 'Edm.String'},
    sharedOpenShift: {type: 'graph.openShiftItem'}
  }
} as EntityConfig<OpenShift>;