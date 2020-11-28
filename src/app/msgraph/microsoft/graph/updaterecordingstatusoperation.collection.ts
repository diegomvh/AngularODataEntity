import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
import { UpdateRecordingStatusOperationModel } from './updaterecordingstatusoperation.model';
//#endregion

export class UpdateRecordingStatusOperationCollection<E extends UpdateRecordingStatusOperation, M extends UpdateRecordingStatusOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}