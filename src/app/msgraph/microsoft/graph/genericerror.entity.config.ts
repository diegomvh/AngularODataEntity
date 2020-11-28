import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GenericError } from './genericerror.entity';
import { GenericErrorModel } from './genericerror.model';
import { GenericErrorCollection } from './genericerror.collection';
//#endregion

export const GenericErrorConfig = {
  name: "genericError",
  model: GenericErrorModel,
  collection: GenericErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<GenericError>;