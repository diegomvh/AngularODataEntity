import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookOperationError } from './workbookoperationerror.entity';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
//#endregion

export class WorkbookOperationErrorModel<E extends WorkbookOperationError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  innerError?: WorkbookOperationErrorModel<WorkbookOperationError>;
  message?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}