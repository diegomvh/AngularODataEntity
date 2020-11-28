import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
import { EntityModel } from './entity.model';
import { TeamsAppModel } from './teamsapp.model';
import { EntityCollection } from './entity.collection';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export interface AppCatalogs extends Entity {
  //#region ODataApi Properties
  teamsApps?: TeamsApp[];
  //#endregion
}