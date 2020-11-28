﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

export interface GeoDimension extends DimensionOrTopic {
  //#region ODataApi Properties
  MapYear?: number;
  //#endregion
}