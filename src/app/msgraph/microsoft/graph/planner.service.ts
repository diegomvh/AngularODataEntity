import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataSingletonEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
import { Planner } from './planner.entity';
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

@Injectable()
export class PlannerService extends ODataSingletonService<Planner> {
  constructor(protected client: ODataClient) {
    super(client, 'planner', 'microsoft.graph.planner');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}