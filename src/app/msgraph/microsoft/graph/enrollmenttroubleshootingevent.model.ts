import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
import { EnrollmentTroubleshootingEvent } from './enrollmenttroubleshootingevent.entity';
import { EnrollmentTroubleshootingEventCollection } from './enrollmenttroubleshootingevent.collection';
//#endregion

export class EnrollmentTroubleshootingEventModel<E extends EnrollmentTroubleshootingEvent> extends DeviceManagementTroubleshootingEventModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}