import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PublicInnerError } from './publicinnererror.entity';
import { PublicInnerErrorModel } from './publicinnererror.model';
import { PublicInnerErrorCollection } from './publicinnererror.collection';
//#endregion

export const PublicInnerErrorConfig = {
  name: "publicInnerError",
  open: true,
  model: PublicInnerErrorModel,
  collection: PublicInnerErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    details: {type: 'graph.publicErrorDetail', collection: true},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as EntityConfig<PublicInnerError>;