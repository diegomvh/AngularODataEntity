import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyError } from './freebusyerror.entity';
import { FreeBusyErrorModel } from './freebusyerror.model';
import { FreeBusyErrorCollection } from './freebusyerror.collection';
//#endregion

export const FreeBusyErrorConfig = {
  name: "freeBusyError",
  model: FreeBusyErrorModel,
  collection: FreeBusyErrorCollection,
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    responseCode: {type: 'Edm.String'}
  }
} as EntityConfig<FreeBusyError>;