import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
//#endregion

export interface Teamwork extends Entity {
  //#region ODataApi Properties
  workforceIntegrations?: WorkforceIntegration[];
  //#endregion
}