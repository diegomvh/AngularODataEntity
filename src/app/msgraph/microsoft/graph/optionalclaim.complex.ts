import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OptionalClaim {
  //#region ODataApi Properties
  additionalProperties?: string[];
  essential: boolean;
  name: string;
  source?: string;
  //#endregion
}