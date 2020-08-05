import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { IdentitySet } from './identityset.entity';
import { PlannerAppliedCategories } from './plannerappliedcategories.entity';
import { PlannerAssignments } from './plannerassignments.entity';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
//#endregion

export interface PlannerTask extends Entity {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  planId?: string;
  bucketId?: string;
  title: string;
  orderHint?: string;
  assigneePriority?: string;
  percentComplete?: number;
  startDateTime?: Date;
  createdDateTime?: Date;
  dueDateTime?: Date;
  hasDescription?: boolean;
  previewType?: PlannerPreviewType;
  completedDateTime?: Date;
  completedBy?: IdentitySet;
  referenceCount?: number;
  checklistItemCount?: number;
  activeChecklistItemCount?: number;
  appliedCategories?: PlannerAppliedCategories;
  assignments?: PlannerAssignments;
  conversationThreadId?: string;
  details?: PlannerTaskDetails;
  assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
  progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
  bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
  //#endregion
}