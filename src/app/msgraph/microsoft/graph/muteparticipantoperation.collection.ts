import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { MuteParticipantOperationModel } from './muteparticipantoperation.model';
//#endregion

export class MuteParticipantOperationCollection<E extends MuteParticipantOperation, M extends MuteParticipantOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}