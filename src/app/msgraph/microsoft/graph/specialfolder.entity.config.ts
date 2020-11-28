import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SpecialFolder } from './specialfolder.entity';
import { SpecialFolderModel } from './specialfolder.model';
import { SpecialFolderCollection } from './specialfolder.collection';
//#endregion

export const SpecialFolderConfig = {
  name: "specialFolder",
  model: SpecialFolderModel,
  collection: SpecialFolderCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as EntityConfig<SpecialFolder>;