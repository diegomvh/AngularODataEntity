import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppProductCodeRule } from './win32lobappproductcoderule.complex';
import { Win32LobAppProductCodeRuleModel } from './win32lobappproductcoderule.model';
import { Win32LobAppProductCodeRuleCollection } from './win32lobappproductcoderule.collection';
//#endregion

export const Win32LobAppProductCodeRuleConfig = {
  name: "win32LobAppProductCodeRule",
  base: "microsoft.graph.win32LobAppRule",
  model: Win32LobAppProductCodeRuleModel,
  collection: Win32LobAppProductCodeRuleCollection,
  annotations: [],
  fields: {
    productCode: {type: 'Edm.String'},
    productVersion: {type: 'Edm.String'},
    productVersionOperator: {type: 'graph.win32LobAppRuleOperator', nullable: false}
  }
} as StructuredTypeConfig<Win32LobAppProductCodeRule>;