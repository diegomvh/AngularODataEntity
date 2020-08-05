import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailSearchFolder } from './mailsearchfolder.entity';
//#endregion

export const MailSearchFolderConfig = {
  name: "MailSearchFolder",
  base: "microsoft.graph.mailFolder",
  annotations: [],
  fields: {
    isSupported: {type: 'Edm.Boolean'},
    includeNestedFolders: {type: 'Edm.Boolean'},
    sourceFolderIds: {type: 'Edm.String', collection: true},
    filterQuery: {type: 'Edm.String'}
  }
} as EntityConfig<MailSearchFolder>;