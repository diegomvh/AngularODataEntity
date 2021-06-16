//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Point } from 'geojson';
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

export interface AirportLocation extends Location {
  //#region ODataApi Properties
  Loc: Point;
  //#endregion
}