import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { ChatMessageMention } from './chatmessagemention.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { ChatMessageMentionCollection } from './chatmessagemention.collection';
//#endregion

export class ChatMessageMentionModel<E extends ChatMessageMention> extends ODataModel<E> {
  //#region ODataApi Properties
  id?: number;
  mentioned?: IdentitySetModel<IdentitySet>;
  mentionText?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}