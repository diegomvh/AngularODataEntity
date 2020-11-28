import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Folder } from './folder.complex';
import { FolderModel } from './folder.model';
import { FolderCollection } from './folder.collection';
//#endregion

export const FolderConfig = {
  name: "folder",
  model: FolderModel,
  collection: FolderCollection,
  annotations: [],
  fields: {
    childCount: {type: 'Edm.Int32'},
    view: {type: 'graph.folderView'}
  }
} as StructuredTypeConfig<Folder>;