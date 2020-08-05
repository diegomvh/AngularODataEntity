import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ItemActionStat } from './itemactionstat.entity';
import { IncompleteData } from './incompletedata.entity';
import { ItemActivity } from './itemactivity.entity';
//#endregion

export interface ItemActivityStat extends Entity {
  //#region ODataApi Properties
  startDateTime?: Date;
  endDateTime?: Date;
  access?: ItemActionStat;
  create?: ItemActionStat;
  delete?: ItemActionStat;
  edit?: ItemActionStat;
  move?: ItemActionStat;
  isTrending?: boolean;
  incompleteData?: IncompleteData;
  activities?: ItemActivity[];
  //#endregion
}