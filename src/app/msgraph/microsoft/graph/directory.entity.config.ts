import { StructuredTypeConfig } from 'angular-odata';

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
    administrativeUnits: {type: 'graph.administrativeUnit', collection: true, navigation: true},
    deletedItems: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Directory>;