import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarPermission } from './calendarpermission.entity';
import { CalendarPermissionModel } from './calendarpermission.model';
import { CalendarPermissionCollection } from './calendarpermission.collection';
//#endregion

export const CalendarPermissionConfig = {
  name: "calendarPermission",
  base: "microsoft.graph.entity",
  model: CalendarPermissionModel,
  collection: CalendarPermissionCollection,
  annotations: [],
  fields: {
    allowedRoles: {type: 'graph.calendarRoleType', collection: true},
    emailAddress: {type: 'graph.emailAddress'},
    isInsideOrganization: {type: 'Edm.Boolean'},
    isRemovable: {type: 'Edm.Boolean'},
    role: {type: 'graph.calendarRoleType'}
  }
} as EntityConfig<CalendarPermission>;