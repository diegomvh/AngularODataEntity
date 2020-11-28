import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { ChatMessageMention } from './chatmessagemention.complex';
import { IdentitySetModel } from './identityset.model';
import { ChatMessageMentionModel } from './chatmessagemention.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class ChatMessageMentionCollection<E extends ChatMessageMention, M extends ChatMessageMentionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}