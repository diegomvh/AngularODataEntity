import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { EntityModel } from './entity.model';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { EntityCollection } from './entity.collection';
import { TeamsAppCollection } from './teamsapp.collection';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export interface TeamsAppInstallation extends Entity {
  //#region ODataApi Properties
  teamsApp?: TeamsApp;
  teamsAppDefinition?: TeamsAppDefinition;
  //#endregion
}