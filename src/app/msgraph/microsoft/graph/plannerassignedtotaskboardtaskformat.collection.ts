import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerOrderHintsByAssigneeModel } from './plannerorderhintsbyassignee.model';
import { PlannerAssignedToTaskBoardTaskFormatModel } from './plannerassignedtotaskboardtaskformat.model';
import { PlannerOrderHintsByAssigneeCollection } from './plannerorderhintsbyassignee.collection';
//#endregion

export class PlannerAssignedToTaskBoardTaskFormatCollection<E extends PlannerAssignedToTaskBoardTaskFormat, M extends PlannerAssignedToTaskBoardTaskFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}