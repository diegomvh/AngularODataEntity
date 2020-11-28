import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ResourceReference } from './resourcereference.complex';
import { ResourceVisualization } from './resourcevisualization.complex';
import { UsageDetails } from './usagedetails.complex';
import { Entity } from './entity.entity';
import { UsedInsight } from './usedinsight.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { UsageDetailsModel } from './usagedetails.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { UsageDetailsCollection } from './usagedetails.collection';
import { EntityCollection } from './entity.collection';
import { UsedInsightCollection } from './usedinsight.collection';
//#endregion

export class UsedInsightModel<E extends UsedInsight> extends EntityModel<E> {
  //#region ODataApi Properties
  lastUsed?: UsageDetailsModel<UsageDetails>;
  resourceReference?: ResourceReferenceModel<ResourceReference>;
  resourceVisualization?: ResourceVisualizationModel<ResourceVisualization>;
  resource?: EntityModel<Entity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}