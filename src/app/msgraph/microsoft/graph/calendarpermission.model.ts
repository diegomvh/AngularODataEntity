import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { CalendarRoleType } from './calendarroletype.enum';
import { EmailAddress } from './emailaddress.entity';
import { CalendarPermission } from './calendarpermission.entity';
import { EmailAddressModel } from './emailaddress.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { CalendarPermissionCollection } from './calendarpermission.collection';
//#endregion

export class CalendarPermissionModel<E extends CalendarPermission> extends EntityModel<E> {
  //#region ODataApi Properties
  allowedRoles?: CalendarRoleType;
  emailAddress?: EmailAddressModel<EmailAddress>;
  isInsideOrganization?: boolean;
  isRemovable?: boolean;
  role?: CalendarRoleType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}