import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
//#endregion

export const DefinitionTypeConfig = {
  name: "DefinitionType",
  members: DefinitionType
} as EnumTypeConfig<DefinitionType>;