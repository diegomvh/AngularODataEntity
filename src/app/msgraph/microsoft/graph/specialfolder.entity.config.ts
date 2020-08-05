import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SpecialFolder } from './specialfolder.entity';
//#endregion

export const SpecialFolderConfig = {
  name: "SpecialFolder",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'}
  }
} as EntityConfig<SpecialFolder>;