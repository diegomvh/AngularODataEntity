import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
//#endregion

export const SignInFrequencySessionControlConfig = {
  name: "SignInFrequencySessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  annotations: [],
  fields: {
    value: {type: 'Edm.Int32'},
    type: {type: 'graph.signinFrequencyType'}
  }
} as EntityConfig<SignInFrequencySessionControl>;