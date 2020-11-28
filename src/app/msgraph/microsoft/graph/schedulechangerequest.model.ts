import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
import { ScheduleChangeState } from './schedulechangestate.enum';
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
//#endregion

export class ScheduleChangeRequestModel<E extends ScheduleChangeRequest> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  assignedTo?: ScheduleChangeRequestActor;
  managerActionDateTime?: Date;
  managerActionMessage?: string;
  managerUserId?: string;
  senderDateTime?: Date;
  senderMessage?: string;
  senderUserId?: string;
  state?: ScheduleChangeState;
  //#endregion
  //#region ODataApi Actions
  public decline(message: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{message: string}, any>('microsoft.graph.decline');
    res.segment.entitySet('');
    return res.call({message}, 'property', options) as Observable<any>;
  }
  public approve(message: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{message: string}, any>('microsoft.graph.approve');
    res.segment.entitySet('');
    return res.call({message}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}