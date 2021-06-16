//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { DimensionOrTopic } from './dimensionortopic.entity';
import { DimensionOrTopicModel } from './dimensionortopic.model';
import { DimensionOrTopicCollection } from './dimensionortopic.collection';
//#endregion

export interface Topic extends DimensionOrTopic {
  //#region ODataApi Properties
  Datatype?: string;
  Unit?: string;
  Decimals?: number;
  Default?: string;
  //#endregion
}