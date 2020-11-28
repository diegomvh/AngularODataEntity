import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
import { TimeOffReason } from './timeoffreason.entity';
import { TimeOffReasonCollection } from './timeoffreason.collection';
//#endregion

export class TimeOffReasonModel<E extends TimeOffReason> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  iconType?: TimeOffReasonIconType;
  isActive?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}