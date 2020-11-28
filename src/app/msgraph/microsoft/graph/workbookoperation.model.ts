import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
import { WorkbookOperationError } from './workbookoperationerror.complex';
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
import { WorkbookOperationCollection } from './workbookoperation.collection';
//#endregion

export class WorkbookOperationModel<E extends WorkbookOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  error?: WorkbookOperationErrorModel<WorkbookOperationError>;
  resourceLocation?: string;
  status: WorkbookOperationStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}