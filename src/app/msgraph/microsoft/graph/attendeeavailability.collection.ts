import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeAvailability } from './attendeeavailability.complex';
import { AttendeeBase } from './attendeebase.complex';
import { AttendeeAvailabilityModel } from './attendeeavailability.model';
import { AttendeeBaseModel } from './attendeebase.model';
import { AttendeeBaseCollection } from './attendeebase.collection';
//#endregion

export class AttendeeAvailabilityCollection<E extends AttendeeAvailability, M extends AttendeeAvailabilityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}