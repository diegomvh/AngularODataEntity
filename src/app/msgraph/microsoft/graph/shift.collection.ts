import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { ShiftItem } from './shiftitem.complex';
import { Shift } from './shift.entity';
import { ShiftItemModel } from './shiftitem.model';
import { ShiftModel } from './shift.model';
import { ShiftItemCollection } from './shiftitem.collection';
//#endregion

export class ShiftCollection<E extends Shift, M extends ShiftModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}