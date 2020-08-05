import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
//#endregion

export interface RolePermission {
  //#region ODataApi Properties
  resourceActions?: ResourceAction[];
  //#endregion
}