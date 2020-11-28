import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeBorderCollection } from './workbookrangeborder.collection';
//#endregion

export class WorkbookRangeBorderModel<E extends WorkbookRangeBorder> extends EntityModel<E> {
  //#region ODataApi Properties
  color?: string;
  sideIndex?: string;
  style?: string;
  weight?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}