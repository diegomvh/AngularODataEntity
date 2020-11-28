import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceReference } from './resourcereference.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { UsageDetails } from './usagedetails.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { UsageDetailsModel } from './usagedetails.model';
import { EntityModel } from './entity.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { UsageDetailsCollection } from './usagedetails.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface UsedInsight extends Entity {
  //#region ODataApi Properties
  lastUsed?: UsageDetails;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  resource?: Entity;
  //#endregion
}