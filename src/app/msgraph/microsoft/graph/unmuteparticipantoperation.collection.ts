import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { UnmuteParticipantOperation } from './unmuteparticipantoperation.entity';
import { UnmuteParticipantOperationModel } from './unmuteparticipantoperation.model';
//#endregion

export class UnmuteParticipantOperationCollection<E extends UnmuteParticipantOperation, M extends UnmuteParticipantOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}