import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConversationMemberCollection } from './conversationmember.collection';
import { User } from './user.entity';
import { AadUserConversationMember } from './aaduserconversationmember.entity';
import { UserModel } from './user.model';
import { AadUserConversationMemberModel } from './aaduserconversationmember.model';
import { UserCollection } from './user.collection';
//#endregion

export class AadUserConversationMemberCollection<E extends AadUserConversationMember, M extends AadUserConversationMemberModel<E>> extends ConversationMemberCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}