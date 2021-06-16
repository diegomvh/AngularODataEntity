//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface EventLocation extends Location {
  //#region ODataApi Properties
  BuildingInfo?: string;
  //#endregion
}