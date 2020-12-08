import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
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
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Injectable()
export class PeriodenService extends ODataEntityService<TimeCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Perioden', 'Cbs.OData.TimeCategory');
  }

  //#region ODataApi Model
  timeCategoryModel(attrs?: Partial<TimeCategory>): TimeCategoryModel<TimeCategory> {
    return this.entity().asModel(attrs || {}) as TimeCategoryModel<TimeCategory>;
  }
  //#endregion
  //#region ODataApi Collection
  timeCategoryCollection(models?: Partial<TimeCategory>[]): TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>> {
    return this.entities().asCollection(models || []) as TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
