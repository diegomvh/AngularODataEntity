import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceReference } from './resourcereference.entity';
import { SharingDetail } from './sharingdetail.entity';
//#endregion

export interface SharedInsight extends Entity {
  //#region ODataApi Properties
  lastShared?: SharingDetail;
  sharingHistory?: SharingDetail[];
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  lastSharedMethod?: Entity;
  resource?: Entity;
  //#endregion
}