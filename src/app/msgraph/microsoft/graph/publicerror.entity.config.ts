import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicError } from './publicerror.entity';
//#endregion

export const PublicErrorConfig = {
  name: "PublicError",
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    innerError: {type: 'graph.publicInnerError'}
  }
} as EntityConfig<PublicError>;