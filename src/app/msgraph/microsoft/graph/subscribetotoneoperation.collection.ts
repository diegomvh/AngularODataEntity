import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { SubscribeToToneOperation } from './subscribetotoneoperation.entity';
import { SubscribeToToneOperationModel } from './subscribetotoneoperation.model';
//#endregion

export class SubscribeToToneOperationCollection<E extends SubscribeToToneOperation, M extends SubscribeToToneOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}