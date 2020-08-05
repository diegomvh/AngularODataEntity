import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GenericError } from './genericerror.entity';
//#endregion

export const GenericErrorConfig = {
  name: "genericError",
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    code: {type: 'Edm.String'}
  }
} as EntityConfig<GenericError>;