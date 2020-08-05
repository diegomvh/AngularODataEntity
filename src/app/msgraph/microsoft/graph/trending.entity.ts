import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.entity';
import { ResourceReference } from './resourcereference.entity';
//#endregion

export interface Trending extends Entity {
  //#region ODataApi Properties
  weight: number;
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  lastModifiedDateTime?: Date;
  resource?: Entity;
  //#endregion
}