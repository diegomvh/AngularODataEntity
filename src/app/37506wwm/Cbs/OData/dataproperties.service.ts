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
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

@Injectable()
export class DataPropertiesService extends ODataEntitySetService<DimensionOrTopic> {
  constructor(protected client: ODataClient) {
    super(client, 'DataProperties', 'Cbs.OData.DimensionOrTopic');
  }
  //#region ODataApi Model
  dimensionOrTopicModel(attrs?: Partial<DimensionOrTopic>): DimensionOrTopicModel<DimensionOrTopic> {
    return this.entity().asModel<DimensionOrTopicModel<DimensionOrTopic>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  dimensionOrTopicCollection(models?: Partial<DimensionOrTopic>[]): DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>> {
    return this.entities().asCollection<DimensionOrTopicModel<DimensionOrTopic>, DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
