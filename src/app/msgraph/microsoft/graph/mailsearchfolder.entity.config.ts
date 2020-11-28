import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailSearchFolder } from './mailsearchfolder.entity';
import { MailSearchFolderModel } from './mailsearchfolder.model';
import { MailSearchFolderCollection } from './mailsearchfolder.collection';
//#endregion

export const MailSearchFolderConfig = {
  name: "mailSearchFolder",
  base: "microsoft.graph.mailFolder",
  model: MailSearchFolderModel,
  collection: MailSearchFolderCollection,
  annotations: [],
  fields: {
    filterQuery: {type: 'Edm.String'},
    includeNestedFolders: {type: 'Edm.Boolean'},
    isSupported: {type: 'Edm.Boolean'},
    sourceFolderIds: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<MailSearchFolder>;