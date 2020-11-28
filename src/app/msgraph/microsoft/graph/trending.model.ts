import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ResourceReference } from './resourcereference.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { Entity } from './entity.entity';
import { Trending } from './trending.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { EntityCollection } from './entity.collection';
import { TrendingCollection } from './trending.collection';
//#endregion

export class TrendingModel<E extends Trending> extends EntityModel<E> {
  //#region ODataApi Properties
  lastModifiedDateTime?: Date;
  resourceReference?: ResourceReferenceModel<ResourceReference>;
  resourceVisualization?: ResourceVisualizationModel<ResourceVisualization>;
  weight: number;
  resource?: EntityModel<Entity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}