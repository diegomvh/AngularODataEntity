import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneInformation } from './timezoneinformation.complex';
import { TimeZoneInformationModel } from './timezoneinformation.model';
import { TimeZoneInformationCollection } from './timezoneinformation.collection';
//#endregion

export const TimeZoneInformationConfig = {
  name: "timeZoneInformation",
  model: TimeZoneInformationModel,
  collection: TimeZoneInformationCollection,
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeZoneInformation>;