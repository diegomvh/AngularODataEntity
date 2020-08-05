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
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { ClonableTeamParts } from './clonableteamparts.enum';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamMemberSettings } from './teammembersettings.entity';
import { TeamGuestSettings } from './teamguestsettings.entity';
import { TeamMessagingSettings } from './teammessagingsettings.entity';
import { TeamFunSettings } from './teamfunsettings.entity';
import { Team } from './team.entity';
import { Group } from './group.entity';
import { TeamsTemplate } from './teamstemplate.entity';
//#endregion

@Injectable()
export class TeamsService extends ODataService<Team> {
  constructor(protected client: ODataClient) {
    super(client, 'teams', 'microsoft.graph.team');
  }

  //#region ODataApi Actions
  public clone(entity: EntityKey<Team>): ODataActionResource<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any> {
    const resource = this.entity(entity).action<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any>('microsoft.graph.clone');
    return resource;
  }
  public archive(entity: EntityKey<Team>): ODataActionResource<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any> {
    const resource = this.entity(entity).action<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any>('microsoft.graph.archive');
    return resource;
  }
  public unarchive(entity: EntityKey<Team>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.unarchive');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public group(entity: EntityKey<Team>): ODataNavigationPropertyResource<Group> {
    return this.entity(entity).navigationProperty<Group>('group');
  }
  public template(entity: EntityKey<Team>): ODataNavigationPropertyResource<TeamsTemplate> {
    return this.entity(entity).navigationProperty<TeamsTemplate>('template');
  }
  //#endregion
}
