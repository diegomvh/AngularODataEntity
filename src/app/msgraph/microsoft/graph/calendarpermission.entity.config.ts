import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarPermission } from './calendarpermission.entity';
//#endregion

export const CalendarPermissionConfig = {
  name: "calendarPermission",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    emailAddress: {type: 'graph.emailAddress'},
    isRemovable: {type: 'Edm.Boolean'},
    isInsideOrganization: {type: 'Edm.Boolean'},
    role: {type: 'graph.calendarRoleType'},
    allowedRoles: {type: 'graph.calendarRoleType', collection: true}
  }
} as EntityConfig<CalendarPermission>;