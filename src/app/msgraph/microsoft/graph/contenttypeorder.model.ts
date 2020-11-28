import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ContentTypeOrder } from './contenttypeorder.entity';
import { ContentTypeOrderCollection } from './contenttypeorder.collection';
//#endregion

export class ContentTypeOrderModel<E extends ContentTypeOrder> extends ODataModel<E> {
  //#region ODataApi Properties
  default?: boolean;
  position?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}