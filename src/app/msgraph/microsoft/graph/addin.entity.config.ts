import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AddIn } from './addin.entity';
import { AddInModel } from './addin.model';
import { AddInCollection } from './addin.collection';
//#endregion

export const AddInConfig = {
  name: "addIn",
  model: AddInModel,
  collection: AddInCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Guid'},
    properties: {type: 'graph.keyValue', nullable: false, collection: true},
    type: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<AddIn>;