import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.entity';
import { WorkbookFunctionResult } from './workbookfunctionresult.entity';
import { JsonModel } from './json.model';
import { JsonCollection } from './json.collection';
import { WorkbookFunctionResultCollection } from './workbookfunctionresult.collection';
//#endregion

export class WorkbookFunctionResultModel<E extends WorkbookFunctionResult> extends EntityModel<E> {
  //#region ODataApi Properties
  error?: string;
  value?: JsonModel<Json>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}