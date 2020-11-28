import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConversationMemberModel } from './conversationmember.model';
import { User } from './user.entity';
import { AadUserConversationMember } from './aaduserconversationmember.entity';
import { UserModel } from './user.model';
import { UserCollection } from './user.collection';
import { AadUserConversationMemberCollection } from './aaduserconversationmember.collection';
//#endregion

export class AadUserConversationMemberModel<E extends AadUserConversationMember> extends ConversationMemberModel<E> {
  //#region ODataApi Properties
  email?: string;
  userId?: string;
  user?: UserModel<User>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}