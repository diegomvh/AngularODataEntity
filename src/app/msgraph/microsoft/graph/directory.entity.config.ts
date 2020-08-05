import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Directory } from './directory.entity';
//#endregion

export const DirectoryConfig = {
  name: "Directory",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    deletedItems: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<Directory>;