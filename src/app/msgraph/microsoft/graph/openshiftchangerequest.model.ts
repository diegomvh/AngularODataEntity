import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { OpenShiftChangeRequestCollection } from './openshiftchangerequest.collection';
//#endregion

export class OpenShiftChangeRequestModel<E extends OpenShiftChangeRequest> extends ScheduleChangeRequestModel<E> {
  //#region ODataApi Properties
  openShiftId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}