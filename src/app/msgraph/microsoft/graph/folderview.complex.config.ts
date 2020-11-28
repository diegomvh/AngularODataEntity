import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FolderView } from './folderview.complex';
import { FolderViewModel } from './folderview.model';
import { FolderViewCollection } from './folderview.collection';
//#endregion

export const FolderViewConfig = {
  name: "folderView",
  model: FolderViewModel,
  collection: FolderViewCollection,
  annotations: [],
  fields: {
    sortBy: {type: 'Edm.String'},
    sortOrder: {type: 'Edm.String'},
    viewType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FolderView>;