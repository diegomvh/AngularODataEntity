import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AddIn } from './addin.entity';
//#endregion

export const AddInConfig = {
  name: "addIn",
  annotations: [],
  fields: {
    id: {type: 'Edm.Guid'},
    type: {type: 'Edm.String', nullable: false},
    properties: {type: 'graph.keyValue', nullable: false, collection: true}
  }
} as EntityConfig<AddIn>;