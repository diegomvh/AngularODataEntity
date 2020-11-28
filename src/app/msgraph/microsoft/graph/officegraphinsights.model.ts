import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { SharedInsight } from './sharedinsight.entity';
import { Trending } from './trending.entity';
import { UsedInsight } from './usedinsight.entity';
import { SharedInsightModel } from './sharedinsight.model';
import { TrendingModel } from './trending.model';
import { UsedInsightModel } from './usedinsight.model';
import { OfficeGraphInsightsCollection } from './officegraphinsights.collection';
import { SharedInsightCollection } from './sharedinsight.collection';
import { TrendingCollection } from './trending.collection';
import { UsedInsightCollection } from './usedinsight.collection';
//#endregion

export class OfficeGraphInsightsModel<E extends OfficeGraphInsights> extends EntityModel<E> {
  //#region ODataApi Properties
  shared?: SharedInsightCollection<SharedInsight, SharedInsightModel<SharedInsight>>;
  trending?: TrendingCollection<Trending, TrendingModel<Trending>>;
  used?: UsedInsightCollection<UsedInsight, UsedInsightModel<UsedInsight>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}