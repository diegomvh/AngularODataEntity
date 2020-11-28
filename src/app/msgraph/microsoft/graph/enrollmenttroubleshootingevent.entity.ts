import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
//#endregion

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent {
  //#region ODataApi Properties
  deviceId?: string;
  enrollmentType: DeviceEnrollmentType;
  failureCategory: DeviceEnrollmentFailureReason;
  failureReason?: string;
  managedDeviceIdentifier?: string;
  operatingSystem?: string;
  osVersion?: string;
  userId?: string;
  //#endregion
}