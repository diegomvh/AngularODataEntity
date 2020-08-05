import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OptionalClaim {
  //#region ODataApi Properties
  name: string;
  source?: string;
  essential: boolean;
  additionalProperties?: string[];
  //#endregion
}