import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeAvailability } from './attendeeavailability.complex';
import { Location } from './location.complex';
import { MeetingTimeSuggestion } from './meetingtimesuggestion.complex';
import { TimeSlot } from './timeslot.complex';
import { AttendeeAvailabilityModel } from './attendeeavailability.model';
import { LocationModel } from './location.model';
import { TimeSlotModel } from './timeslot.model';
import { AttendeeAvailabilityCollection } from './attendeeavailability.collection';
import { LocationCollection } from './location.collection';
import { MeetingTimeSuggestionCollection } from './meetingtimesuggestion.collection';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export class MeetingTimeSuggestionModel<E extends MeetingTimeSuggestion> extends ODataModel<E> {
  //#region ODataApi Properties
  attendeeAvailability?: AttendeeAvailabilityCollection<AttendeeAvailability, AttendeeAvailabilityModel<AttendeeAvailability>>;
  confidence?: number;
  locations?: LocationCollection<Location, LocationModel<Location>>;
  meetingTimeSlot?: TimeSlotModel<TimeSlot>;
  order?: number;
  organizerAvailability?: FreeBusyStatus;
  suggestionReason?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}