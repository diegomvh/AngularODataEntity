import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
import { TimeOffRequest } from './timeoffrequest.entity';
import { TimeOffRequestModel } from './timeoffrequest.model';
//#endregion

export class TimeOffRequestCollection<E extends TimeOffRequest, M extends TimeOffRequestModel<E>> extends ScheduleChangeRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}