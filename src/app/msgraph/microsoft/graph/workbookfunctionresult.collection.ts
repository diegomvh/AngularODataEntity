import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.complex';
import { WorkbookFunctionResult } from './workbookfunctionresult.entity';
import { JsonModel } from './json.model';
import { WorkbookFunctionResultModel } from './workbookfunctionresult.model';
import { JsonCollection } from './json.collection';
//#endregion

export class WorkbookFunctionResultCollection<E extends WorkbookFunctionResult, M extends WorkbookFunctionResultModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}