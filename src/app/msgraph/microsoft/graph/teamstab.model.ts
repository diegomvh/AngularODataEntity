import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsApp } from './teamsapp.entity';
import { TeamsTab } from './teamstab.entity';
import { TeamsTabConfigurationModel } from './teamstabconfiguration.model';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsTabConfigurationCollection } from './teamstabconfiguration.collection';
import { TeamsAppCollection } from './teamsapp.collection';
import { TeamsTabCollection } from './teamstab.collection';
//#endregion

export class TeamsTabModel<E extends TeamsTab> extends EntityModel<E> {
  //#region ODataApi Properties
  configuration?: TeamsTabConfigurationModel<TeamsTabConfiguration>;
  displayName?: string;
  webUrl?: string;
  teamsApp?: TeamsAppModel<TeamsApp>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}