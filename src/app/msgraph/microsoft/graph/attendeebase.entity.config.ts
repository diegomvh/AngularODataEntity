import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeBase } from './attendeebase.entity';
//#endregion

export const AttendeeBaseConfig = {
  name: "attendeeBase",
  base: "microsoft.graph.recipient",
  annotations: [],
  fields: {
    type: {type: 'graph.attendeeType'}
  }
} as EntityConfig<AttendeeBase>;