import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
import { SigninFrequencyType } from './signinfrequencytype.enum';
//#endregion

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  value?: number;
  type?: SigninFrequencyType;
  //#endregion
}