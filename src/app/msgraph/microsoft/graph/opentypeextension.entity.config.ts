import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenTypeExtension } from './opentypeextension.entity';
//#endregion

export const OpenTypeExtensionConfig = {
  name: "OpenTypeExtension",
  base: "microsoft.graph.extension",
  open: true,
  annotations: [],
  fields: {
    extensionName: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<OpenTypeExtension>;