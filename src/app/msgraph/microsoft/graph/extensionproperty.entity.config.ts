import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExtensionProperty } from './extensionproperty.entity';
//#endregion

export const ExtensionPropertyConfig = {
  name: "extensionProperty",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    appDisplayName: {type: 'Edm.String'},
    name: {type: 'Edm.String', nullable: false},
    dataType: {type: 'Edm.String', nullable: false},
    isSyncedFromOnPremises: {type: 'Edm.Boolean'},
    targetObjects: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ExtensionProperty>;