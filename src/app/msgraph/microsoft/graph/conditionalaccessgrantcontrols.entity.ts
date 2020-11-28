import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessGrantControl } from './conditionalaccessgrantcontrol.enum';
//#endregion

export interface ConditionalAccessGrantControls {
  //#region ODataApi Properties
  builtInControls: ConditionalAccessGrantControl;
  customAuthenticationFactors: string[];
  operator?: string;
  termsOfUse: string[];
  //#endregion
}