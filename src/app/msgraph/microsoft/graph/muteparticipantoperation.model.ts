import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationModel } from './commsoperation.model';
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { MuteParticipantOperationCollection } from './muteparticipantoperation.collection';
//#endregion

export class MuteParticipantOperationModel<E extends MuteParticipantOperation> extends CommsOperationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}