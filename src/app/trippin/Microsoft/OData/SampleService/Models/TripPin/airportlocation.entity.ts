//#region ODataApi Imports
import { Location } from './location.entity';
//#endregion

export interface AirportLocation extends Location {
  //#region ODataApi Properties
  Loc: any;
  //#endregion
}