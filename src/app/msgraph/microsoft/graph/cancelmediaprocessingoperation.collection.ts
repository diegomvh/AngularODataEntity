import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { CancelMediaProcessingOperation } from './cancelmediaprocessingoperation.entity';
import { CancelMediaProcessingOperationModel } from './cancelmediaprocessingoperation.model';
//#endregion

export class CancelMediaProcessingOperationCollection<E extends CancelMediaProcessingOperation, M extends CancelMediaProcessingOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}