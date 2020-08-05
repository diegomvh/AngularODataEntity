import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationStatus } from './operationstatus.enum';
import { Shift } from './shift.entity';
import { OpenShift } from './openshift.entity';
import { TimeOff } from './timeoff.entity';
import { TimeOffReason } from './timeoffreason.entity';
import { SchedulingGroup } from './schedulinggroup.entity';
import { OfferShiftRequest } from './offershiftrequest.entity';
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
import { TimeOffRequest } from './timeoffrequest.entity';
//#endregion

export interface Schedule extends Entity {
  //#region ODataApi Properties
  enabled?: boolean;
  timeZone?: string;
  provisionStatus?: OperationStatus;
  provisionStatusCode?: string;
  workforceIntegrationIds?: string[];
  timeClockEnabled?: boolean;
  openShiftsEnabled?: boolean;
  swapShiftsRequestsEnabled?: boolean;
  offerShiftRequestsEnabled?: boolean;
  timeOffRequestsEnabled?: boolean;
  shifts?: Shift[];
  openShifts?: OpenShift[];
  timesOff?: TimeOff[];
  timeOffReasons?: TimeOffReason[];
  schedulingGroups?: SchedulingGroup[];
  swapShiftsChangeRequests?: SwapShiftsChangeRequest[];
  openShiftChangeRequests?: OpenShiftChangeRequest[];
  offerShiftRequests?: OfferShiftRequest[];
  timeOffRequests?: TimeOffRequest[];
  //#endregion
}