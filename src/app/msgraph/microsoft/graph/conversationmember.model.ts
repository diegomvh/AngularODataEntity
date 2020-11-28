import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ConversationMember } from './conversationmember.entity';
import { ConversationMemberCollection } from './conversationmember.collection';
//#endregion

export class ConversationMemberModel<E extends ConversationMember> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  roles?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}