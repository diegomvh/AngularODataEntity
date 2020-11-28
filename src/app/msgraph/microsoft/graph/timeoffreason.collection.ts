import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
import { TimeOffReason } from './timeoffreason.entity';
import { TimeOffReasonModel } from './timeoffreason.model';
//#endregion

export class TimeOffReasonCollection<E extends TimeOffReason, M extends TimeOffReasonModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}