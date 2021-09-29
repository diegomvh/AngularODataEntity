import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Injectable()
export class PeriodenService extends ODataEntitySetService<TimeCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Perioden', 'Cbs.OData.TimeCategory');
  }
  //#region ODataApiGen Model
  timeCategoryModel(attrs?: Partial<TimeCategory>): TimeCategoryModel<TimeCategory> {
    return this.entity().asModel<TimeCategoryModel<TimeCategory>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  timeCategoryCollection(models?: Partial<TimeCategory>[]): TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>> {
    return this.entities().asCollection<TimeCategoryModel<TimeCategory>, TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
