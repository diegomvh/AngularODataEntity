import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { IdentitySet } from './identityset.complex';
import { PlannerAppliedCategories } from './plannerappliedcategories.complex';
import { PlannerAssignments } from './plannerassignments.complex';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerAppliedCategoriesModel } from './plannerappliedcategories.model';
import { PlannerAssignmentsModel } from './plannerassignments.model';
import { EntityModel } from './entity.model';
import { PlannerAssignedToTaskBoardTaskFormatModel } from './plannerassignedtotaskboardtaskformat.model';
import { PlannerBucketTaskBoardTaskFormatModel } from './plannerbuckettaskboardtaskformat.model';
import { PlannerProgressTaskBoardTaskFormatModel } from './plannerprogresstaskboardtaskformat.model';
import { PlannerTaskDetailsModel } from './plannertaskdetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerAppliedCategoriesCollection } from './plannerappliedcategories.collection';
import { PlannerAssignmentsCollection } from './plannerassignments.collection';
import { EntityCollection } from './entity.collection';
import { PlannerAssignedToTaskBoardTaskFormatCollection } from './plannerassignedtotaskboardtaskformat.collection';
import { PlannerBucketTaskBoardTaskFormatCollection } from './plannerbuckettaskboardtaskformat.collection';
import { PlannerProgressTaskBoardTaskFormatCollection } from './plannerprogresstaskboardtaskformat.collection';
import { PlannerTaskDetailsCollection } from './plannertaskdetails.collection';
//#endregion

export interface PlannerTask extends Entity {
  //#region ODataApi Properties
  activeChecklistItemCount?: number;
  appliedCategories?: PlannerAppliedCategories;
  assigneePriority?: string;
  assignments?: PlannerAssignments;
  bucketId?: string;
  checklistItemCount?: number;
  completedBy?: IdentitySet;
  completedDateTime?: Date;
  conversationThreadId?: string;
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  dueDateTime?: Date;
  hasDescription?: boolean;
  orderHint?: string;
  percentComplete?: number;
  planId?: string;
  previewType?: PlannerPreviewType;
  referenceCount?: number;
  startDateTime?: Date;
  title: string;
  assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
  bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
  details?: PlannerTaskDetails;
  progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
  //#endregion
}