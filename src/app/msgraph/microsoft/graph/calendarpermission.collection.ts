import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { CalendarRoleType } from './calendarroletype.enum';
import { EmailAddress } from './emailaddress.entity';
import { CalendarPermission } from './calendarpermission.entity';
import { EmailAddressModel } from './emailaddress.model';
import { CalendarPermissionModel } from './calendarpermission.model';
import { EmailAddressCollection } from './emailaddress.collection';
//#endregion

export class CalendarPermissionCollection<E extends CalendarPermission, M extends CalendarPermissionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}