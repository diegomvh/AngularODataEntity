import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { NamedLocation } from './namedlocation.entity';
//#endregion

export interface ConditionalAccessRoot extends Entity {
  //#region ODataApi Properties
  policies?: ConditionalAccessPolicy[];
  namedLocations?: NamedLocation[];
  //#endregion
}