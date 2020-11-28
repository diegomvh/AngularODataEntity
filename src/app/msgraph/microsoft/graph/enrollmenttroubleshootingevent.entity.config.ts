import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EnrollmentTroubleshootingEvent } from './enrollmenttroubleshootingevent.entity';
import { EnrollmentTroubleshootingEventModel } from './enrollmenttroubleshootingevent.model';
import { EnrollmentTroubleshootingEventCollection } from './enrollmenttroubleshootingevent.collection';
//#endregion

export const EnrollmentTroubleshootingEventConfig = {
  name: "enrollmentTroubleshootingEvent",
  base: "microsoft.graph.deviceManagementTroubleshootingEvent",
  model: EnrollmentTroubleshootingEventModel,
  collection: EnrollmentTroubleshootingEventCollection,
  annotations: [],
  fields: {
    deviceId: {type: 'Edm.String'},
    enrollmentType: {type: 'graph.deviceEnrollmentType', nullable: false},
    failureCategory: {type: 'graph.deviceEnrollmentFailureReason', nullable: false},
    failureReason: {type: 'Edm.String'},
    managedDeviceIdentifier: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    userId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EnrollmentTroubleshootingEvent>;