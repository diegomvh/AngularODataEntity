import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ConversationMember } from './conversationmember.entity';
import { ConversationMemberModel } from './conversationmember.model';
//#endregion

export class ConversationMemberCollection<E extends ConversationMember, M extends ConversationMemberModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}