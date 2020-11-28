import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
import { ScheduleChangeState } from './schedulechangestate.enum';
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
//#endregion

export class ScheduleChangeRequestCollection<E extends ScheduleChangeRequest, M extends ScheduleChangeRequestModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}