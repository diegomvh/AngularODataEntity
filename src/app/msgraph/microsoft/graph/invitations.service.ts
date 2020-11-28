import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { Invitation } from './invitation.entity';
import { User } from './user.entity';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { InvitationModel } from './invitation.model';
import { UserModel } from './user.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
import { InvitationCollection } from './invitation.collection';
import { UserCollection } from './user.collection';
//#endregion

@Injectable()
export class InvitationsService extends ODataEntityService<Invitation> {
  constructor(protected client: ODataClient) {
    super(client, 'invitations', 'microsoft.graph.invitation');
  }

  //#region ODataApi Model
  invitationModel(): InvitationModel<Invitation> {
    return this.entity().asModel() as InvitationModel<Invitation>;
  }
  //#endregion
  //#region ODataApi Collection
  invitationCollection(): InvitationCollection<Invitation, InvitationModel<Invitation>> {
    return this.entities().asCollection() as InvitationCollection<Invitation, InvitationModel<Invitation>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public invitedUser(entity: EntityKey<Invitation>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('invitedUser');
  }
  //#endregion
}
