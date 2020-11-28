import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoUser } from './recursouser.entity';
import { RecursoUserModel } from './recursouser.model';
import { RecursoUserCollection } from './recursouser.collection';
//#endregion

export const RecursoUserConfig = {
  name: "RecursoUser",
  model: RecursoUserModel,
  collection: RecursoUserCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.String', key: true, ref: 'id', nullable: false},
    name: {type: 'Edm.String'}
  }
} as EntityConfig<RecursoUser>;