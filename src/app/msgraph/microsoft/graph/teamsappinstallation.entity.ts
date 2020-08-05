import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

export interface TeamsAppInstallation extends Entity {
  //#region ODataApi Properties
  teamsApp?: TeamsApp;
  teamsAppDefinition?: TeamsAppDefinition;
  //#endregion
}