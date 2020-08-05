import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailFolder } from './mailfolder.entity';
//#endregion

export const MailFolderConfig = {
  name: "mailFolder",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    parentFolderId: {type: 'Edm.String'},
    childFolderCount: {type: 'Edm.Int32'},
    unreadItemCount: {type: 'Edm.Int32'},
    totalItemCount: {type: 'Edm.Int32'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    messages: {type: 'graph.message', collection: true, navigation: true},
    messageRules: {type: 'graph.messageRule', collection: true, navigation: true},
    childFolders: {type: 'graph.mailFolder', collection: true, navigation: true}
  }
} as EntityConfig<MailFolder>;