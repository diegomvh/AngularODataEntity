import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeAvailability } from './attendeeavailability.entity';
import { AttendeeBase } from './attendeebase.entity';
import { AttendeeBaseModel } from './attendeebase.model';
import { AttendeeAvailabilityCollection } from './attendeeavailability.collection';
import { AttendeeBaseCollection } from './attendeebase.collection';
//#endregion

export class AttendeeAvailabilityModel<E extends AttendeeAvailability> extends ODataModel<E> {
  //#region ODataApi Properties
  attendee?: AttendeeBaseModel<AttendeeBase>;
  availability?: FreeBusyStatus;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}