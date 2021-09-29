//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefinitionType } from './definitiontype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefinitionTypeConfig = {
  name: "DefinitionType",
  members: DefinitionType,
  fields: {
    Any: {value: 0},
    FAQ: {value: 1},
    Explanation: {value: 2},
    Definition: {value: 3},
    Unknown: {value: -1}
  }
} as EnumTypeConfig<DefinitionType>;
//#endregion