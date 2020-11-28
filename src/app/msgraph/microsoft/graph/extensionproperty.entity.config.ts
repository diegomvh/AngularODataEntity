import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExtensionProperty } from './extensionproperty.entity';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
//#endregion

export const ExtensionPropertyConfig = {
  name: "extensionProperty",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: ExtensionPropertyModel,
  collection: ExtensionPropertyCollection,
  annotations: [],
  fields: {
    appDisplayName: {type: 'Edm.String'},
    dataType: {type: 'Edm.String', nullable: false},
    isSyncedFromOnPremises: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String', nullable: false},
    targetObjects: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ExtensionProperty>;