import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { IdentitySet } from './identityset.entity';
import { PlannerAppliedCategories } from './plannerappliedcategories.entity';
import { PlannerAssignments } from './plannerassignments.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerAppliedCategoriesModel } from './plannerappliedcategories.model';
import { PlannerAssignmentsModel } from './plannerassignments.model';
import { PlannerAssignedToTaskBoardTaskFormatModel } from './plannerassignedtotaskboardtaskformat.model';
import { PlannerBucketTaskBoardTaskFormatModel } from './plannerbuckettaskboardtaskformat.model';
import { PlannerProgressTaskBoardTaskFormatModel } from './plannerprogresstaskboardtaskformat.model';
import { PlannerTaskDetailsModel } from './plannertaskdetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerAppliedCategoriesCollection } from './plannerappliedcategories.collection';
import { PlannerAssignmentsCollection } from './plannerassignments.collection';
import { PlannerTaskCollection } from './plannertask.collection';
import { PlannerAssignedToTaskBoardTaskFormatCollection } from './plannerassignedtotaskboardtaskformat.collection';
import { PlannerBucketTaskBoardTaskFormatCollection } from './plannerbuckettaskboardtaskformat.collection';
import { PlannerProgressTaskBoardTaskFormatCollection } from './plannerprogresstaskboardtaskformat.collection';
import { PlannerTaskDetailsCollection } from './plannertaskdetails.collection';
//#endregion

export class PlannerTaskModel<E extends PlannerTask> extends EntityModel<E> {
  //#region ODataApi Properties
  activeChecklistItemCount?: number;
  appliedCategories?: PlannerAppliedCategoriesModel<PlannerAppliedCategories>;
  assigneePriority?: string;
  assignments?: PlannerAssignmentsModel<PlannerAssignments>;
  bucketId?: string;
  checklistItemCount?: number;
  completedBy?: IdentitySetModel<IdentitySet>;
  completedDateTime?: Date;
  conversationThreadId?: string;
  createdBy?: IdentitySetModel<IdentitySet>;
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
  assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormatModel<PlannerAssignedToTaskBoardTaskFormat>;
  bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormatModel<PlannerBucketTaskBoardTaskFormat>;
  details?: PlannerTaskDetailsModel<PlannerTaskDetails>;
  progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormatModel<PlannerProgressTaskBoardTaskFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}