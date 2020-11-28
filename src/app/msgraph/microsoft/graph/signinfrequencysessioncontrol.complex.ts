import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.complex';
import { SigninFrequencyType } from './signinfrequencytype.enum';
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
//#endregion

export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl {
  //#region ODataApi Properties
  type?: SigninFrequencyType;
  value?: number;
  //#endregion
}