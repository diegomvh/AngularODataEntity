import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
//#endregion

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent {
  //#region ODataApi Properties
  managedDeviceIdentifier?: string;
  operatingSystem?: string;
  osVersion?: string;
  userId?: string;
  deviceId?: string;
  enrollmentType: DeviceEnrollmentType;
  failureCategory: DeviceEnrollmentFailureReason;
  failureReason?: string;
  //#endregion
}