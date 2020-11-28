import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { ShiftItem } from './shiftitem.entity';
import { Shift } from './shift.entity';
import { ShiftItemModel } from './shiftitem.model';
import { ShiftItemCollection } from './shiftitem.collection';
import { ShiftCollection } from './shift.collection';
//#endregion

export class ShiftModel<E extends Shift> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  draftShift?: ShiftItemModel<ShiftItem>;
  schedulingGroupId?: string;
  sharedShift?: ShiftItemModel<ShiftItem>;
  userId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}