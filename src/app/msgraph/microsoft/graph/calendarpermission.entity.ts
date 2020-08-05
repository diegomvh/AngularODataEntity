import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CalendarRoleType } from './calendarroletype.enum';
import { EmailAddress } from './emailaddress.entity';
//#endregion

export interface CalendarPermission extends Entity {
  //#region ODataApi Properties
  emailAddress?: EmailAddress;
  isRemovable?: boolean;
  isInsideOrganization?: boolean;
  role?: CalendarRoleType;
  allowedRoles?: CalendarRoleType;
  //#endregion
}