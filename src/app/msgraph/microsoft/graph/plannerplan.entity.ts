import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { IdentitySetModel } from './identityset.model';
import { EntityModel } from './entity.model';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerPlanDetailsModel } from './plannerplandetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { EntityCollection } from './entity.collection';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerTaskCollection } from './plannertask.collection';
import { PlannerPlanDetailsCollection } from './plannerplandetails.collection';
//#endregion

export interface PlannerPlan extends Entity {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  owner?: string;
  title: string;
  buckets?: PlannerBucket[];
  details?: PlannerPlanDetails;
  tasks?: PlannerTask[];
  //#endregion
}