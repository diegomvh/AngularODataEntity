import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { TimeOffRequest } from './timeoffrequest.entity';
import { TimeOffRequestCollection } from './timeoffrequest.collection';
//#endregion

export class TimeOffRequestModel<E extends TimeOffRequest> extends ScheduleChangeRequestModel<E> {
  //#region ODataApi Properties
  endDateTime?: Date;
  startDateTime?: Date;
  timeOffReasonId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}