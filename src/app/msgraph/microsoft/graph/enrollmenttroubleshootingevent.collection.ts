import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
import { EnrollmentTroubleshootingEvent } from './enrollmenttroubleshootingevent.entity';
import { EnrollmentTroubleshootingEventModel } from './enrollmenttroubleshootingevent.model';
//#endregion

export class EnrollmentTroubleshootingEventCollection<E extends EnrollmentTroubleshootingEvent, M extends EnrollmentTroubleshootingEventModel<E>> extends DeviceManagementTroubleshootingEventCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}