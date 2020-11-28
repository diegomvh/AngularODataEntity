import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ResourceReference } from './resourcereference.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { UsageDetails } from './usagedetails.entity';
import { Entity } from './entity.entity';
import { UsedInsight } from './usedinsight.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { UsageDetailsModel } from './usagedetails.model';
import { EntityModel } from './entity.model';
import { UsedInsightModel } from './usedinsight.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { UsageDetailsCollection } from './usagedetails.collection';
//#endregion

export class UsedInsightCollection<E extends UsedInsight, M extends UsedInsightModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}