import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyError } from './freebusyerror.entity';
//#endregion

export const FreeBusyErrorConfig = {
  name: "freeBusyError",
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    responseCode: {type: 'Edm.String'}
  }
} as EntityConfig<FreeBusyError>;