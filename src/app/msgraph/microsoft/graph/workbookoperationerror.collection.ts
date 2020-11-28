import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookOperationError } from './workbookoperationerror.entity';
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
//#endregion

export class WorkbookOperationErrorCollection<E extends WorkbookOperationError, M extends WorkbookOperationErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}