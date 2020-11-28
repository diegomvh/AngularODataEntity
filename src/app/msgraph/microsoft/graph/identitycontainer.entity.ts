import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { EntityModel } from './entity.model';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { EntityCollection } from './entity.collection';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
//#endregion

export interface IdentityContainer extends Entity {
  //#region ODataApi Properties
  conditionalAccess?: ConditionalAccessRoot;
  //#endregion
}