import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Deleted } from './deleted.entity';
import { DeletedModel } from './deleted.model';
import { DeletedCollection } from './deleted.collection';
//#endregion

export const DeletedConfig = {
  name: "deleted",
  model: DeletedModel,
  collection: DeletedCollection,
  annotations: [],
  fields: {
    state: {type: 'Edm.String'}
  }
} as EntityConfig<Deleted>;