import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ShiftItemModel } from './shiftitem.model';
import { OpenShiftItem } from './openshiftitem.entity';
import { OpenShiftItemCollection } from './openshiftitem.collection';
//#endregion

export class OpenShiftItemModel<E extends OpenShiftItem> extends ShiftItemModel<E> {
  //#region ODataApi Properties
  openSlotCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}