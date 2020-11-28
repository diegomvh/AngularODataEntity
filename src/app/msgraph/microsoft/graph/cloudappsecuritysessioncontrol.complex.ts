import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.complex';
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
//#endregion

export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  cloudAppSecurityType?: CloudAppSecuritySessionControlType;
  //#endregion
}