import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerGroup } from './plannergroup.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerGroupCollection } from './plannergroup.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
//#endregion

export class PlannerGroupModel<E extends PlannerGroup> extends EntityModel<E> {
  //#region ODataApi Properties
  plans?: PlannerPlanCollection<PlannerPlan, PlannerPlanModel<PlannerPlan>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}