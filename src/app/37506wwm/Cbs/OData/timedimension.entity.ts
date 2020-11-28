import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

export interface TimeDimension extends DimensionOrTopic {
  //#region ODataApi Properties
  ReleasePolicy?: boolean;
  //#endregion
}