import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceReference } from './resourcereference.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceVisualizationModel } from './resourcevisualization.model';
import { EntityModel } from './entity.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
import { ResourceVisualizationCollection } from './resourcevisualization.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface Trending extends Entity {
  //#region ODataApi Properties
  lastModifiedDateTime?: Date;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  weight: number;
  resource?: Entity;
  //#endregion
}