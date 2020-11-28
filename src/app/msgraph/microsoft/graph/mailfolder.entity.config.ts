import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailFolder } from './mailfolder.entity';
import { MailFolderModel } from './mailfolder.model';
import { MailFolderCollection } from './mailfolder.collection';
//#endregion

export const MailFolderConfig = {
  name: "mailFolder",
  base: "microsoft.graph.entity",
  model: MailFolderModel,
  collection: MailFolderCollection,
  annotations: [],
  fields: {
    childFolderCount: {type: 'Edm.Int32'},
    displayName: {type: 'Edm.String'},
    parentFolderId: {type: 'Edm.String'},
    totalItemCount: {type: 'Edm.Int32'},
    unreadItemCount: {type: 'Edm.Int32'},
    childFolders: {type: 'graph.mailFolder', collection: true, navigation: true},
    messageRules: {type: 'graph.messageRule', collection: true, navigation: true},
    messages: {type: 'graph.message', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MailFolder>;