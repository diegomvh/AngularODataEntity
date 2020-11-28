import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IncompleteData } from './incompletedata.entity';
import { ItemActionStat } from './itemactionstat.entity';
import { ItemActivity } from './itemactivity.entity';
import { IncompleteDataModel } from './incompletedata.model';
import { ItemActionStatModel } from './itemactionstat.model';
import { EntityModel } from './entity.model';
import { ItemActivityModel } from './itemactivity.model';
import { IncompleteDataCollection } from './incompletedata.collection';
import { ItemActionStatCollection } from './itemactionstat.collection';
import { EntityCollection } from './entity.collection';
import { ItemActivityCollection } from './itemactivity.collection';
//#endregion

export interface ItemActivityStat extends Entity {
  //#region ODataApi Properties
  access?: ItemActionStat;
  create?: ItemActionStat;
  delete?: ItemActionStat;
  edit?: ItemActionStat;
  endDateTime?: Date;
  incompleteData?: IncompleteData;
  isTrending?: boolean;
  move?: ItemActionStat;
  startDateTime?: Date;
  activities?: ItemActivity[];
  //#endregion
}