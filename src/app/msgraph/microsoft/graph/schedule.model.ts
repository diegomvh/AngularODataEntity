import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OperationStatus } from './operationstatus.enum';
import { Schedule } from './schedule.entity';
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OpenShift } from './openshift.entity';
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { SchedulingGroup } from './schedulinggroup.entity';
import { Shift } from './shift.entity';
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { TimeOffReason } from './timeoffreason.entity';
import { TimeOffRequest } from './timeoffrequest.entity';
import { TimeOff } from './timeoff.entity';
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { OpenShiftModel } from './openshift.model';
import { OpenShiftChangeRequestModel } from './openshiftchangerequest.model';
import { SchedulingGroupModel } from './schedulinggroup.model';
import { ShiftModel } from './shift.model';
import { SwapShiftsChangeRequestModel } from './swapshiftschangerequest.model';
import { TimeOffReasonModel } from './timeoffreason.model';
import { TimeOffRequestModel } from './timeoffrequest.model';
import { TimeOffModel } from './timeoff.model';
import { ScheduleCollection } from './schedule.collection';
import { OfferShiftRequestCollection } from './offershiftrequest.collection';
import { OpenShiftCollection } from './openshift.collection';
import { OpenShiftChangeRequestCollection } from './openshiftchangerequest.collection';
import { SchedulingGroupCollection } from './schedulinggroup.collection';
import { ShiftCollection } from './shift.collection';
import { SwapShiftsChangeRequestCollection } from './swapshiftschangerequest.collection';
import { TimeOffReasonCollection } from './timeoffreason.collection';
import { TimeOffRequestCollection } from './timeoffrequest.collection';
import { TimeOffCollection } from './timeoff.collection';
//#endregion

export class ScheduleModel<E extends Schedule> extends EntityModel<E> {
  //#region ODataApi Properties
  enabled?: boolean;
  offerShiftRequestsEnabled?: boolean;
  openShiftsEnabled?: boolean;
  provisionStatus?: OperationStatus;
  provisionStatusCode?: string;
  swapShiftsRequestsEnabled?: boolean;
  timeClockEnabled?: boolean;
  timeOffRequestsEnabled?: boolean;
  timeZone?: string;
  workforceIntegrationIds?: string[];
  offerShiftRequests?: OfferShiftRequestCollection<OfferShiftRequest, OfferShiftRequestModel<OfferShiftRequest>>;
  openShiftChangeRequests?: OpenShiftChangeRequestCollection<OpenShiftChangeRequest, OpenShiftChangeRequestModel<OpenShiftChangeRequest>>;
  openShifts?: OpenShiftCollection<OpenShift, OpenShiftModel<OpenShift>>;
  schedulingGroups?: SchedulingGroupCollection<SchedulingGroup, SchedulingGroupModel<SchedulingGroup>>;
  shifts?: ShiftCollection<Shift, ShiftModel<Shift>>;
  swapShiftsChangeRequests?: SwapShiftsChangeRequestCollection<SwapShiftsChangeRequest, SwapShiftsChangeRequestModel<SwapShiftsChangeRequest>>;
  timeOffReasons?: TimeOffReasonCollection<TimeOffReason, TimeOffReasonModel<TimeOffReason>>;
  timeOffRequests?: TimeOffRequestCollection<TimeOffRequest, TimeOffRequestModel<TimeOffRequest>>;
  timesOff?: TimeOffCollection<TimeOff, TimeOffModel<TimeOff>>;
  //#endregion
  //#region ODataApi Actions
  public share(notifyTeam: boolean, startDateTime: Date, endDateTime: Date, options?: HttpOptions): Observable<any> {
    var res = this._action<{notifyTeam: boolean, startDateTime: Date, endDateTime: Date}, any>('microsoft.graph.share');
    res.segment.entitySet('');
    return res.call({notifyTeam, startDateTime, endDateTime}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}