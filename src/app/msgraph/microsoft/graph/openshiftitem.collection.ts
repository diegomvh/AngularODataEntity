import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ShiftItemCollection } from './shiftitem.collection';
import { OpenShiftItem } from './openshiftitem.entity';
import { OpenShiftItemModel } from './openshiftitem.model';
//#endregion

export class OpenShiftItemCollection<E extends OpenShiftItem, M extends OpenShiftItemModel<E>> extends ShiftItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}