import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
//#endregion

export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  cloudAppSecurityType?: CloudAppSecuritySessionControlType;
  //#endregion
}