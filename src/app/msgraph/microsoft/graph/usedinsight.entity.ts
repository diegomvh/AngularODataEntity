import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceReference } from './resourcereference.entity';
import { UsageDetails } from './usagedetails.entity';
//#endregion

export interface UsedInsight extends Entity {
  //#region ODataApi Properties
  lastUsed?: UsageDetails;
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  resource?: Entity;
  //#endregion
}