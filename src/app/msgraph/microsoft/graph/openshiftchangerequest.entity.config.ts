import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { OpenShiftChangeRequestModel } from './openshiftchangerequest.model';
import { OpenShiftChangeRequestCollection } from './openshiftchangerequest.collection';
//#endregion

export const OpenShiftChangeRequestConfig = {
  name: "openShiftChangeRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  model: OpenShiftChangeRequestModel,
  collection: OpenShiftChangeRequestCollection,
  annotations: [],
  fields: {
    openShiftId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OpenShiftChangeRequest>;