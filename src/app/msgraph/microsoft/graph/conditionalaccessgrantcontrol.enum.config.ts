import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessGrantControl } from './conditionalaccessgrantcontrol.enum';
//#endregion

export const ConditionalAccessGrantControlConfig = {
  name: "conditionalAccessGrantControl",
  members: ConditionalAccessGrantControl
} as EnumConfig<ConditionalAccessGrantControl>;