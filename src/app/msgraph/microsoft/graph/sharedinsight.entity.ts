import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceReference } from './resourcereference.complex';
import { ResourceVisualization } from './resourcevisualization.complex';
import { SharingDetail } from './sharingdetail.complex';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { SharingDetailModel } from './sharingdetail.model';
import { EntityModel } from './entity.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { SharingDetailCollection } from './sharingdetail.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SharedInsight extends Entity {
  //#region ODataApi Properties
  lastShared?: SharingDetail;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  sharingHistory?: SharingDetail[];
  lastSharedMethod?: Entity;
  resource?: Entity;
  //#endregion
}