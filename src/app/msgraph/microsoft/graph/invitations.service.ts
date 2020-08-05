import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
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
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
import { Invitation } from './invitation.entity';
import { User } from './user.entity';
//#endregion

@Injectable()
export class InvitationsService extends ODataService<Invitation> {
  constructor(protected client: ODataClient) {
    super(client, 'invitations', 'microsoft.graph.invitation');
  }

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
