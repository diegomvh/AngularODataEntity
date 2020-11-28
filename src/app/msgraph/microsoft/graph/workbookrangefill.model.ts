import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFillCollection } from './workbookrangefill.collection';
//#endregion

export class WorkbookRangeFillModel<E extends WorkbookRangeFill> extends EntityModel<E> {
  //#region ODataApi Properties
  color?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}