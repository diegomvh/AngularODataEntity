import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface TeamsAppDefinition extends Entity {
  //#region ODataApi Properties
  teamsAppId?: string;
  displayName?: string;
  version?: string;
  //#endregion
}