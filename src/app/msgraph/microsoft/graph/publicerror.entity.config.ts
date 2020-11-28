import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicError } from './publicerror.entity';
import { PublicErrorModel } from './publicerror.model';
import { PublicErrorCollection } from './publicerror.collection';
//#endregion

export const PublicErrorConfig = {
  name: "publicError",
  model: PublicErrorModel,
  collection: PublicErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    innerError: {type: 'graph.publicInnerError'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as EntityConfig<PublicError>;