import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AttendeeBaseModel } from './attendeebase.model';
import { TimeSlot } from './timeslot.entity';
import { Attendee } from './attendee.entity';
import { ResponseStatus } from './responsestatus.entity';
import { TimeSlotModel } from './timeslot.model';
import { ResponseStatusModel } from './responsestatus.model';
import { TimeSlotCollection } from './timeslot.collection';
import { AttendeeCollection } from './attendee.collection';
import { ResponseStatusCollection } from './responsestatus.collection';
//#endregion

export class AttendeeModel<E extends Attendee> extends AttendeeBaseModel<E> {
  //#region ODataApi Properties
  proposedNewTime?: TimeSlotModel<TimeSlot>;
  status?: ResponseStatusModel<ResponseStatus>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}