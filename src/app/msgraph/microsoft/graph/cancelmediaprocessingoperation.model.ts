import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationModel } from './commsoperation.model';
import { CancelMediaProcessingOperation } from './cancelmediaprocessingoperation.entity';
import { CancelMediaProcessingOperationCollection } from './cancelmediaprocessingoperation.collection';
//#endregion

export class CancelMediaProcessingOperationModel<E extends CancelMediaProcessingOperation> extends CommsOperationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}