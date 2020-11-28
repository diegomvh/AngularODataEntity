import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlertFeedback } from './alertfeedback.enum';
import { AlertStatus } from './alertstatus.enum';
import { AlertHistoryState } from './alerthistorystate.entity';
import { AlertHistoryStateCollection } from './alerthistorystate.collection';
//#endregion

export class AlertHistoryStateModel<E extends AlertHistoryState> extends ODataModel<E> {
  //#region ODataApi Properties
  appId?: string;
  assignedTo?: string;
  comments?: string[];
  feedback?: AlertFeedback;
  status?: AlertStatus;
  updatedDateTime?: Date;
  user?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}