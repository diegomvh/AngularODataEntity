import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ResourceReference } from './resourcereference.complex';
import { ResourceVisualization } from './resourcevisualization.complex';
import { SharingDetail } from './sharingdetail.complex';
import { Entity } from './entity.entity';
import { SharedInsight } from './sharedinsight.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { SharingDetailModel } from './sharingdetail.model';
import { EntityModel } from './entity.model';
import { SharedInsightModel } from './sharedinsight.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { SharingDetailCollection } from './sharingdetail.collection';
//#endregion

export class SharedInsightCollection<E extends SharedInsight, M extends SharedInsightModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}