import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OpenShift } from './openshift.entity';
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { SchedulingGroup } from './schedulinggroup.entity';
import { Shift } from './shift.entity';
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { TimeOffReason } from './timeoffreason.entity';
import { TimeOffRequest } from './timeoffrequest.entity';
import { TimeOff } from './timeoff.entity';
import { EntityModel } from './entity.model';
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { OpenShiftModel } from './openshift.model';
import { OpenShiftChangeRequestModel } from './openshiftchangerequest.model';
import { SchedulingGroupModel } from './schedulinggroup.model';
import { ShiftModel } from './shift.model';
import { SwapShiftsChangeRequestModel } from './swapshiftschangerequest.model';
import { TimeOffReasonModel } from './timeoffreason.model';
import { TimeOffRequestModel } from './timeoffrequest.model';
import { TimeOffModel } from './timeoff.model';
import { EntityCollection } from './entity.collection';
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

export interface Schedule extends Entity {
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
  offerShiftRequests?: OfferShiftRequest[];
  openShiftChangeRequests?: OpenShiftChangeRequest[];
  openShifts?: OpenShift[];
  schedulingGroups?: SchedulingGroup[];
  shifts?: Shift[];
  swapShiftsChangeRequests?: SwapShiftsChangeRequest[];
  timeOffReasons?: TimeOffReason[];
  timeOffRequests?: TimeOffRequest[];
  timesOff?: TimeOff[];
  //#endregion
}