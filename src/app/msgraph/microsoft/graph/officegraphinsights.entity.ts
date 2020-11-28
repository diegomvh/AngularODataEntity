import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SharedInsight } from './sharedinsight.entity';
import { Trending } from './trending.entity';
import { UsedInsight } from './usedinsight.entity';
import { EntityModel } from './entity.model';
import { SharedInsightModel } from './sharedinsight.model';
import { TrendingModel } from './trending.model';
import { UsedInsightModel } from './usedinsight.model';
import { EntityCollection } from './entity.collection';
import { SharedInsightCollection } from './sharedinsight.collection';
import { TrendingCollection } from './trending.collection';
import { UsedInsightCollection } from './usedinsight.collection';
//#endregion

export interface OfficeGraphInsights extends Entity {
  //#region ODataApi Properties
  shared?: SharedInsight[];
  trending?: Trending[];
  used?: UsedInsight[];
  //#endregion
}