import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { SharedInsight } from './sharedinsight.entity';
import { Trending } from './trending.entity';
import { UsedInsight } from './usedinsight.entity';
import { OfficeGraphInsightsModel } from './officegraphinsights.model';
import { SharedInsightModel } from './sharedinsight.model';
import { TrendingModel } from './trending.model';
import { UsedInsightModel } from './usedinsight.model';
import { SharedInsightCollection } from './sharedinsight.collection';
import { TrendingCollection } from './trending.collection';
import { UsedInsightCollection } from './usedinsight.collection';
//#endregion

export class OfficeGraphInsightsCollection<E extends OfficeGraphInsights, M extends OfficeGraphInsightsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}