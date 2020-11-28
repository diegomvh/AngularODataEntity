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
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

@Injectable()
export class DataPropertiesService extends ODataEntityService<DimensionOrTopic> {
  constructor(protected client: ODataClient) {
    super(client, 'DataProperties', 'Cbs.OData.DimensionOrTopic');
  }

  //#region ODataApi Model
  dimensionOrTopicModel(): DimensionOrTopicModel<DimensionOrTopic> {
    return super.model() as DimensionOrTopicModel<DimensionOrTopic>;
  }
  //#endregion
  //#region ODataApi Collection
  dimensionOrTopicCollection(): DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>> {
    return super.collection() as DimensionOrTopicCollection<DimensionOrTopic, DimensionOrTopicModel<DimensionOrTopic>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
