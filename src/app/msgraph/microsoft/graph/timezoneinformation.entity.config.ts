import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneInformation } from './timezoneinformation.entity';
//#endregion

export const TimeZoneInformationConfig = {
  name: "timeZoneInformation",
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<TimeZoneInformation>;