import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
import { ResourceActionModel } from './resourceaction.model';
import { ResourceActionCollection } from './resourceaction.collection';
//#endregion

export interface RolePermission {
  //#region ODataApi Properties
  resourceActions?: ResourceAction[];
  //#endregion
}