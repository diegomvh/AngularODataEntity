import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessClientApp } from './conditionalaccessclientapp.enum';
//#endregion

export const ConditionalAccessClientAppConfig = {
  name: "ConditionalAccessClientApp",
  members: ConditionalAccessClientApp
} as EnumConfig<ConditionalAccessClientApp>;