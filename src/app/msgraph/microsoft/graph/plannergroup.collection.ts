import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerGroup } from './plannergroup.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerGroupModel } from './plannergroup.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerPlanCollection } from './plannerplan.collection';
//#endregion

export class PlannerGroupCollection<E extends PlannerGroup, M extends PlannerGroupModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}