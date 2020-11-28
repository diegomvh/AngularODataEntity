import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { ChatMessageReaction } from './chatmessagereaction.complex';
import { IdentitySetModel } from './identityset.model';
import { ChatMessageReactionModel } from './chatmessagereaction.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class ChatMessageReactionCollection<E extends ChatMessageReaction, M extends ChatMessageReactionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}