import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicInnerError } from './publicinnererror.entity';
//#endregion

export const PublicInnerErrorConfig = {
  name: "PublicInnerError",
  open: true,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as EntityConfig<PublicInnerError>;