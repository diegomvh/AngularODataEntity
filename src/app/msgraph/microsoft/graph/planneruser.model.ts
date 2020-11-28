import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerUser } from './planneruser.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerUserCollection } from './planneruser.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export class PlannerUserModel<E extends PlannerUser> extends EntityModel<E> {
  //#region ODataApi Properties
  plans?: PlannerPlanCollection<PlannerPlan, PlannerPlanModel<PlannerPlan>>;
  tasks?: PlannerTaskCollection<PlannerTask, PlannerTaskModel<PlannerTask>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}