import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.entity';
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerOrderHintsByAssigneeModel } from './plannerorderhintsbyassignee.model';
import { PlannerOrderHintsByAssigneeCollection } from './plannerorderhintsbyassignee.collection';
import { PlannerAssignedToTaskBoardTaskFormatCollection } from './plannerassignedtotaskboardtaskformat.collection';
//#endregion

export class PlannerAssignedToTaskBoardTaskFormatModel<E extends PlannerAssignedToTaskBoardTaskFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  orderHintsByAssignee?: PlannerOrderHintsByAssigneeModel<PlannerOrderHintsByAssignee>;
  unassignedOrderHint?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}