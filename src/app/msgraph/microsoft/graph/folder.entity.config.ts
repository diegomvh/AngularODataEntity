import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Folder } from './folder.entity';
//#endregion

export const FolderConfig = {
  name: "Folder",
  annotations: [],
  fields: {
    childCount: {type: 'Edm.Int32'},
    view: {type: 'graph.folderView'}
  }
} as EntityConfig<Folder>;