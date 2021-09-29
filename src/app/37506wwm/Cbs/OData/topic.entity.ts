//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

export interface Topic extends DimensionOrTopic {
  //#region ODataApiGen Properties
  Datatype?: string;
  Unit?: string;
  Decimals?: number;
  Default?: string;
  //#endregion
}