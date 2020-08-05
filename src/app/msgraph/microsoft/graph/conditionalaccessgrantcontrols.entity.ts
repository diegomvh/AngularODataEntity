import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessGrantControl } from './conditionalaccessgrantcontrol.enum';
//#endregion

export interface ConditionalAccessGrantControls {
  //#region ODataApi Properties
  operator?: string;
  builtInControls: ConditionalAccessGrantControl;
  customAuthenticationFactors: string[];
  termsOfUse: string[];
  //#endregion
}