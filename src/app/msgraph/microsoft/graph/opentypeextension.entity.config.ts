import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OpenTypeExtension } from './opentypeextension.entity';
import { OpenTypeExtensionModel } from './opentypeextension.model';
import { OpenTypeExtensionCollection } from './opentypeextension.collection';
//#endregion

export const OpenTypeExtensionConfig = {
  name: "openTypeExtension",
  base: "microsoft.graph.extension",
  open: true,
  model: OpenTypeExtensionModel,
  collection: OpenTypeExtensionCollection,
  annotations: [],
  fields: {
    extensionName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<OpenTypeExtension>;