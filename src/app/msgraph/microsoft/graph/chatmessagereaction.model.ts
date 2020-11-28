import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { ChatMessageReaction } from './chatmessagereaction.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { ChatMessageReactionCollection } from './chatmessagereaction.collection';
//#endregion

export class ChatMessageReactionModel<E extends ChatMessageReaction> extends ODataModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  reactionType: string;
  user: IdentitySetModel<IdentitySet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}