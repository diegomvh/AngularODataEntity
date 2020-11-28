import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Deleted } from './deleted.complex';
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
} as StructuredTypeConfig<Deleted>;