import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
//#endregion

export const DefinitionTypeConfig = {
  name: "DefinitionType",
  members: DefinitionType
} as EnumConfig<DefinitionType>;