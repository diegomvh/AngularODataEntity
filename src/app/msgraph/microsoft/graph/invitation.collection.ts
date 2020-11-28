import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
import { Invitation } from './invitation.entity';
import { User } from './user.entity';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { InvitationModel } from './invitation.model';
import { UserModel } from './user.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
import { UserCollection } from './user.collection';
//#endregion

export class InvitationCollection<E extends Invitation, M extends InvitationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}