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
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

@Injectable()
export class DataPropertiesService extends ODataEntitySetService<DimensionOrTopic> {
  constructor(protected client: ODataClient) {
    super(client, 'DataProperties', 'Cbs.OData.DimensionOrTopic');
  }
  //#region ODataApiGen Model
  dimensionOrTopicModel(attrs?: Partial<DimensionOrTopic>): DimensionOrTopicModel<DimensionOrTopic> {
    return this.entity().asModel<DimensionOrTopicModel<DimensionOrTopic>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  dimensionOrTopicCollection(models?: Partial<DimensionOrTopic>[]): DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>> {
    return this.entities().asCollection<DimensionOrTopicModel<DimensionOrTopic>, DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
