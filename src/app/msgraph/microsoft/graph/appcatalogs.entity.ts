import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsApp } from './teamsapp.entity';
//#endregion

export interface AppCatalogs extends Entity {
  //#region ODataApi Properties
  teamsApps?: TeamsApp[];
  //#endregion
}