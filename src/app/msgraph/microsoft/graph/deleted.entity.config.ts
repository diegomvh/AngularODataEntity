import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Deleted } from './deleted.entity';
//#endregion

export const DeletedConfig = {
  name: "Deleted",
  annotations: [],
  fields: {
    state: {type: 'Edm.String'}
  }
} as EntityConfig<Deleted>;