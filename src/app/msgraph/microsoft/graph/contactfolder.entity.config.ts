import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContactFolder } from './contactfolder.entity';
import { ContactFolderModel } from './contactfolder.model';
import { ContactFolderCollection } from './contactfolder.collection';
//#endregion

export const ContactFolderConfig = {
  name: "contactFolder",
  base: "microsoft.graph.entity",
  model: ContactFolderModel,
  collection: ContactFolderCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    parentFolderId: {type: 'Edm.String'},
    childFolders: {type: 'graph.contactFolder', collection: true, navigation: true},
    contacts: {type: 'graph.contact', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ContactFolder>;