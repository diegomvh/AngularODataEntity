import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeBase } from './attendeebase.complex';
import { AttendeeBaseModel } from './attendeebase.model';
import { AttendeeBaseCollection } from './attendeebase.collection';
//#endregion

export const AttendeeBaseConfig = {
  name: "attendeeBase",
  base: "microsoft.graph.recipient",
  model: AttendeeBaseModel,
  collection: AttendeeBaseCollection,
  annotations: [],
  fields: {
    type: {type: 'graph.attendeeType'}
  }
} as StructuredTypeConfig<AttendeeBase>;