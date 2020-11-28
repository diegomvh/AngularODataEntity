import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ResourceReference } from './resourcereference.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { SharingDetail } from './sharingdetail.entity';
import { Entity } from './entity.entity';
import { SharedInsight } from './sharedinsight.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { SharingDetailModel } from './sharingdetail.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { SharingDetailCollection } from './sharingdetail.collection';
import { EntityCollection } from './entity.collection';
import { SharedInsightCollection } from './sharedinsight.collection';
//#endregion

export class SharedInsightModel<E extends SharedInsight> extends EntityModel<E> {
  //#region ODataApi Properties
  lastShared?: SharingDetailModel<SharingDetail>;
  resourceReference?: ResourceReferenceModel<ResourceReference>;
  resourceVisualization?: ResourceVisualizationModel<ResourceVisualization>;
  sharingHistory?: SharingDetailCollection<SharingDetail, SharingDetailModel<SharingDetail>>;
  lastSharedMethod?: EntityModel<Entity>;
  resource?: EntityModel<Entity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}