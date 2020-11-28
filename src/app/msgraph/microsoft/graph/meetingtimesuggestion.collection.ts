import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeAvailability } from './attendeeavailability.entity';
import { Location } from './location.entity';
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
import { TimeSlot } from './timeslot.entity';
import { AttendeeAvailabilityModel } from './attendeeavailability.model';
import { LocationModel } from './location.model';
import { MeetingTimeSuggestionModel } from './meetingtimesuggestion.model';
import { TimeSlotModel } from './timeslot.model';
import { AttendeeAvailabilityCollection } from './attendeeavailability.collection';
import { LocationCollection } from './location.collection';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export class MeetingTimeSuggestionCollection<E extends MeetingTimeSuggestion, M extends MeetingTimeSuggestionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}