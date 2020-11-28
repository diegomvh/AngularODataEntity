import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationModel } from './commsoperation.model';
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
import { UpdateRecordingStatusOperationCollection } from './updaterecordingstatusoperation.collection';
//#endregion

export class UpdateRecordingStatusOperationModel<E extends UpdateRecordingStatusOperation> extends CommsOperationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}