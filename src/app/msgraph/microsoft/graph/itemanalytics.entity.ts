import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

export interface ItemAnalytics extends Entity {
  //#region ODataApi Properties
  itemActivityStats?: ItemActivityStat[];
  allTime?: ItemActivityStat;
  lastSevenDays?: ItemActivityStat;
  //#endregion
}