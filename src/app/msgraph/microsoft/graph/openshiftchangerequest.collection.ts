import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { OpenShiftChangeRequestModel } from './openshiftchangerequest.model';
//#endregion

export class OpenShiftChangeRequestCollection<E extends OpenShiftChangeRequest, M extends OpenShiftChangeRequestModel<E>> extends ScheduleChangeRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}