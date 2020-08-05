import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
//#endregion

export const UserAgentConfig = {
  name: "userAgent",
  annotations: [],
  fields: {
    headerValue: {type: 'Edm.String'},
    applicationVersion: {type: 'Edm.String'}
  }
} as EntityConfig<UserAgent>;