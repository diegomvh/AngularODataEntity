import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttendeeBaseCollection } from './attendeebase.collection';
import { TimeSlot } from './timeslot.complex';
import { Attendee } from './attendee.complex';
import { ResponseStatus } from './responsestatus.complex';
import { TimeSlotModel } from './timeslot.model';
import { AttendeeModel } from './attendee.model';
import { ResponseStatusModel } from './responsestatus.model';
import { TimeSlotCollection } from './timeslot.collection';
import { ResponseStatusCollection } from './responsestatus.collection';
//#endregion

export class AttendeeCollection<E extends Attendee, M extends AttendeeModel<E>> extends AttendeeBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}