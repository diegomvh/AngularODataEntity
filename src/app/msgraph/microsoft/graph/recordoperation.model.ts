import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationModel } from './commsoperation.model';
import { RecordOperation } from './recordoperation.entity';
import { RecordOperationCollection } from './recordoperation.collection';
//#endregion

export class RecordOperationModel<E extends RecordOperation> extends CommsOperationModel<E> {
  //#region ODataApi Properties
  recordingAccessToken?: string;
  recordingLocation?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}