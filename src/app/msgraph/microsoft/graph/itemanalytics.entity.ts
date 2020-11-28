import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { EntityModel } from './entity.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { EntityCollection } from './entity.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export interface ItemAnalytics extends Entity {
  //#region ODataApi Properties
  allTime?: ItemActivityStat;
  itemActivityStats?: ItemActivityStat[];
  lastSevenDays?: ItemActivityStat;
  //#endregion
}