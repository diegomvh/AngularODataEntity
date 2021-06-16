import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Injectable()
export class PeriodenService extends ODataEntitySetService<TimeCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Perioden', 'Cbs.OData.TimeCategory');
  }
  //#region ODataApi Model
  timeCategoryModel(attrs?: Partial<TimeCategory>): TimeCategoryModel<TimeCategory> {
    return this.entity().asModel<TimeCategoryModel<TimeCategory>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  timeCategoryCollection(models?: Partial<TimeCategory>[]): TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>> {
    return this.entities().asCollection<TimeCategoryModel<TimeCategory>, TimeCategoryCollection<TimeCategory, TimeCategoryModel<TimeCategory>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
