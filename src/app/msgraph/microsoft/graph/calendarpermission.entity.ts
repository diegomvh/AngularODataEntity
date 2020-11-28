import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CalendarRoleType } from './calendarroletype.enum';
import { EmailAddress } from './emailaddress.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EntityModel } from './entity.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface CalendarPermission extends Entity {
  //#region ODataApi Properties
  allowedRoles?: CalendarRoleType;
  emailAddress?: EmailAddress;
  isInsideOrganization?: boolean;
  isRemovable?: boolean;
  role?: CalendarRoleType;
  //#endregion
}