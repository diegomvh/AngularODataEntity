import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlertFeedback } from './alertfeedback.enum';
import { AlertStatus } from './alertstatus.enum';
import { AlertHistoryState } from './alerthistorystate.entity';
import { AlertHistoryStateModel } from './alerthistorystate.model';
//#endregion

export class AlertHistoryStateCollection<E extends AlertHistoryState, M extends AlertHistoryStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}