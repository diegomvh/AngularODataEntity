import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { Location } from './location.entity';
import { AttendeeAvailability } from './attendeeavailability.entity';
import { TimeSlot } from './timeslot.entity';
//#endregion

export interface MeetingTimeSuggestion {
  //#region ODataApi Properties
  confidence?: number;
  order?: number;
  organizerAvailability?: FreeBusyStatus;
  attendeeAvailability?: AttendeeAvailability[];
  locations?: Location[];
  suggestionReason?: string;
  meetingTimeSlot?: TimeSlot;
  //#endregion
}