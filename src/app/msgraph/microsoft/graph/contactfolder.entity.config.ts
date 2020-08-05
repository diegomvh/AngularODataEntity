import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContactFolder } from './contactfolder.entity';
//#endregion

export const ContactFolderConfig = {
  name: "contactFolder",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    parentFolderId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    contacts: {type: 'graph.contact', collection: true, navigation: true},
    childFolders: {type: 'graph.contactFolder', collection: true, navigation: true}
  }
} as EntityConfig<ContactFolder>;