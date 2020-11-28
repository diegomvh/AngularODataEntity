import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerPreviewType } from './plannerpreviewtype.enum';
import { IdentitySet } from './identityset.complex';
import { PlannerAppliedCategories } from './plannerappliedcategories.complex';
import { PlannerAssignments } from './plannerassignments.complex';
import { PlannerTask } from './plannertask.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerAppliedCategoriesModel } from './plannerappliedcategories.model';
import { PlannerAssignmentsModel } from './plannerassignments.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerAssignedToTaskBoardTaskFormatModel } from './plannerassignedtotaskboardtaskformat.model';
import { PlannerBucketTaskBoardTaskFormatModel } from './plannerbuckettaskboardtaskformat.model';
import { PlannerProgressTaskBoardTaskFormatModel } from './plannerprogresstaskboardtaskformat.model';
import { PlannerTaskDetailsModel } from './plannertaskdetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerAppliedCategoriesCollection } from './plannerappliedcategories.collection';
import { PlannerAssignmentsCollection } from './plannerassignments.collection';
import { PlannerAssignedToTaskBoardTaskFormatCollection } from './plannerassignedtotaskboardtaskformat.collection';
import { PlannerBucketTaskBoardTaskFormatCollection } from './plannerbuckettaskboardtaskformat.collection';
import { PlannerProgressTaskBoardTaskFormatCollection } from './plannerprogresstaskboardtaskformat.collection';
import { PlannerTaskDetailsCollection } from './plannertaskdetails.collection';
//#endregion

export class PlannerTaskCollection<E extends PlannerTask, M extends PlannerTaskModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}