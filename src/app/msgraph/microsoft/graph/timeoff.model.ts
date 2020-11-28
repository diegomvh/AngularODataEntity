import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { TimeOffItem } from './timeoffitem.complex';
import { TimeOff } from './timeoff.entity';
import { TimeOffItemModel } from './timeoffitem.model';
import { TimeOffItemCollection } from './timeoffitem.collection';
import { TimeOffCollection } from './timeoff.collection';
//#endregion

export class TimeOffModel<E extends TimeOff> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  draftTimeOff?: TimeOffItemModel<TimeOffItem>;
  sharedTimeOff?: TimeOffItemModel<TimeOffItem>;
  userId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}