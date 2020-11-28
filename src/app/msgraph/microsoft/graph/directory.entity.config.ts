import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Directory } from './directory.entity';
import { DirectoryModel } from './directory.model';
import { DirectoryCollection } from './directory.collection';
//#endregion

export const DirectoryConfig = {
  name: "directory",
  base: "microsoft.graph.entity",
  model: DirectoryModel,
  collection: DirectoryCollection,
  annotations: [],
  fields: {
    deletedItems: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<Directory>;