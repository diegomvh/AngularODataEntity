import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
import { WorkbookOperationError } from './workbookoperationerror.complex';
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
import { WorkbookOperationModel } from './workbookoperation.model';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
//#endregion

export class WorkbookOperationCollection<E extends WorkbookOperation, M extends WorkbookOperationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}