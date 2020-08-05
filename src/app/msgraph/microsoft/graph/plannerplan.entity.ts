import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
//#endregion

export interface PlannerPlan extends Entity {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  owner?: string;
  title: string;
  tasks?: PlannerTask[];
  buckets?: PlannerBucket[];
  details?: PlannerPlanDetails;
  //#endregion
}