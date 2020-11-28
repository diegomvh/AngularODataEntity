import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessClientApp } from './conditionalaccessclientapp.enum';
//#endregion

export const ConditionalAccessClientAppConfig = {
  name: "conditionalAccessClientApp",
  members: ConditionalAccessClientApp
} as EnumTypeConfig<ConditionalAccessClientApp>;