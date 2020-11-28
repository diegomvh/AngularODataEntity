import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageFormatsConfig } from './pageformats.enum.config';
//#endregion

export const HelpersSchema = {
  namespace: "SIU.OpenXml.Helpers",
  enums: [PageFormatsConfig],
  entities: [],
  callables: [],
  containers: []
} as SchemaConfig;