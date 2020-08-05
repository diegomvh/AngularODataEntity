import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
//#endregion

export interface IdentityContainer extends Entity {
  //#region ODataApi Properties
  conditionalAccess?: ConditionalAccessRoot;
  //#endregion
}