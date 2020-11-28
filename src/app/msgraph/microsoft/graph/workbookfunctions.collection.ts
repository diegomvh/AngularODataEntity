import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookFunctionsModel } from './workbookfunctions.model';
//#endregion

export class WorkbookFunctionsCollection<E extends WorkbookFunctions, M extends WorkbookFunctionsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}