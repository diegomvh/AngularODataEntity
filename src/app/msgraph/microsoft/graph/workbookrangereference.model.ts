import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookRangeReference } from './workbookrangereference.entity';
import { WorkbookRangeReferenceCollection } from './workbookrangereference.collection';
//#endregion

export class WorkbookRangeReferenceModel<E extends WorkbookRangeReference> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}