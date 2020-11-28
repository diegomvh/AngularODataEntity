import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SearchHit {
  //#region ODataApi Properties
  contentSource?: string;
  hitId?: string;
  rank?: number;
  summary?: string;
  //#endregion
}