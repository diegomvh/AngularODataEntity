import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsTabConfiguration } from './teamstabconfiguration.entity';
import { TeamsApp } from './teamsapp.entity';
//#endregion

export interface TeamsTab extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  webUrl?: string;
  configuration?: TeamsTabConfiguration;
  teamsApp?: TeamsApp;
  //#endregion
}