import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { PlayPromptOperation } from './playpromptoperation.entity';
import { PlayPromptOperationModel } from './playpromptoperation.model';
//#endregion

export class PlayPromptOperationCollection<E extends PlayPromptOperation, M extends PlayPromptOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}