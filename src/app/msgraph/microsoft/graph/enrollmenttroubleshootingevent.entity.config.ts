import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EnrollmentTroubleshootingEvent } from './enrollmenttroubleshootingevent.entity';
//#endregion

export const EnrollmentTroubleshootingEventConfig = {
  name: "EnrollmentTroubleshootingEvent",
  base: "microsoft.graph.deviceManagementTroubleshootingEvent",
  annotations: [],
  fields: {
    managedDeviceIdentifier: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    enrollmentType: {type: 'graph.deviceEnrollmentType', nullable: false},
    failureCategory: {type: 'graph.deviceEnrollmentFailureReason', nullable: false},
    failureReason: {type: 'Edm.String'}
  }
} as EntityConfig<EnrollmentTroubleshootingEvent>;