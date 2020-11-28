import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsTabConfiguration } from './teamstabconfiguration.complex';
import { TeamsApp } from './teamsapp.entity';
import { TeamsTabConfigurationModel } from './teamstabconfiguration.model';
import { EntityModel } from './entity.model';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsTabConfigurationCollection } from './teamstabconfiguration.collection';
import { EntityCollection } from './entity.collection';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export interface TeamsTab extends Entity {
  //#region ODataApi Properties
  configuration?: TeamsTabConfiguration;
  displayName?: string;
  webUrl?: string;
  teamsApp?: TeamsApp;
  //#endregion
}