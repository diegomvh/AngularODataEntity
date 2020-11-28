import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
import { TimeSlot } from './timeslot.complex';
import { TimeConstraint } from './timeconstraint.complex';
import { TimeSlotModel } from './timeslot.model';
import { TimeSlotCollection } from './timeslot.collection';
import { TimeConstraintCollection } from './timeconstraint.collection';
//#endregion

export class TimeConstraintModel<E extends TimeConstraint> extends ODataModel<E> {
  //#region ODataApi Properties
  activityDomain?: ActivityDomain;
  timeSlots?: TimeSlotCollection<TimeSlot, TimeSlotModel<TimeSlot>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}