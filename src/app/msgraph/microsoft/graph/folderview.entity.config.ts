import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FolderView } from './folderview.entity';
//#endregion

export const FolderViewConfig = {
  name: "FolderView",
  annotations: [],
  fields: {
    sortBy: {type: 'Edm.String'},
    sortOrder: {type: 'Edm.String'},
    viewType: {type: 'Edm.String'}
  }
} as EntityConfig<FolderView>;