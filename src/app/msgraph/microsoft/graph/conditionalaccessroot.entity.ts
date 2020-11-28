import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { NamedLocation } from './namedlocation.entity';
import { EntityModel } from './entity.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { NamedLocationModel } from './namedlocation.model';
import { EntityCollection } from './entity.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export interface ConditionalAccessRoot extends Entity {
  //#region ODataApi Properties
  namedLocations?: NamedLocation[];
  policies?: ConditionalAccessPolicy[];
  //#endregion
}