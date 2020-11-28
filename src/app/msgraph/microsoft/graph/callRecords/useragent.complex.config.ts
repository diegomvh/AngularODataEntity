import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.complex';
import { UserAgentModel } from './useragent.model';
import { UserAgentCollection } from './useragent.collection';
//#endregion

export const UserAgentConfig = {
  name: "userAgent",
  model: UserAgentModel,
  collection: UserAgentCollection,
  annotations: [],
  fields: {
    applicationVersion: {type: 'Edm.String'},
    headerValue: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<UserAgent>;