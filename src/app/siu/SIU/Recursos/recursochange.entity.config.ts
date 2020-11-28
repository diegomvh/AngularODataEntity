import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecursoChange } from './recursochange.entity';
import { RecursoChangeModel } from './recursochange.model';
import { RecursoChangeCollection } from './recursochange.collection';
//#endregion

export const RecursoChangeConfig = {
  name: "RecursoChange",
  model: RecursoChangeModel,
  collection: RecursoChangeCollection,
  annotations: [],
  fields: {
    created: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<RecursoChange>;