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
import { ClonableTeamParts } from './clonableteamparts.enum';
import { TeamSpecialization } from './teamspecialization.enum';
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamMessagingSettings } from './teammessagingsettings.complex';
import { Team } from './team.entity';
import { Group } from './group.entity';
import { TeamsTemplate } from './teamstemplate.entity';
import { TeamFunSettingsModel } from './teamfunsettings.model';
import { TeamGuestSettingsModel } from './teamguestsettings.model';
import { TeamMemberSettingsModel } from './teammembersettings.model';
import { TeamMessagingSettingsModel } from './teammessagingsettings.model';
import { TeamModel } from './team.model';
import { GroupModel } from './group.model';
import { TeamsTemplateModel } from './teamstemplate.model';
import { TeamFunSettingsCollection } from './teamfunsettings.collection';
import { TeamGuestSettingsCollection } from './teamguestsettings.collection';
import { TeamMemberSettingsCollection } from './teammembersettings.collection';
import { TeamMessagingSettingsCollection } from './teammessagingsettings.collection';
import { TeamCollection } from './team.collection';
import { GroupCollection } from './group.collection';
import { TeamsTemplateCollection } from './teamstemplate.collection';
//#endregion

@Injectable()
export class TeamsService extends ODataEntityService<Team> {
  constructor(protected client: ODataClient) {
    super(client, 'teams', 'microsoft.graph.team');
  }

  //#region ODataApi Model
  teamModel(): TeamModel<Team> {
    return this.entity().asModel() as TeamModel<Team>;
  }
  //#endregion
  //#region ODataApi Collection
  teamCollection(): TeamCollection<Team, TeamModel<Team>> {
    return this.entities().asCollection() as TeamCollection<Team, TeamModel<Team>>;
  }
  //#endregion
  //#region ODataApi Actions
  public archive(entity: EntityKey<Team>): ODataActionResource<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any> {
    const resource = this.entity(entity).action<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any>('microsoft.graph.archive');
    return resource;
  }
  public clone(entity: EntityKey<Team>): ODataActionResource<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any> {
    const resource = this.entity(entity).action<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any>('microsoft.graph.clone');
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
