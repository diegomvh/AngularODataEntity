import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
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
import { ScheduleModel } from './schedule.model';
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { OpenShiftModel } from './openshift.model';
import { OpenShiftChangeRequestModel } from './openshiftchangerequest.model';
import { SchedulingGroupModel } from './schedulinggroup.model';
import { ShiftModel } from './shift.model';
import { SwapShiftsChangeRequestModel } from './swapshiftschangerequest.model';
import { TimeOffReasonModel } from './timeoffreason.model';
import { TimeOffRequestModel } from './timeoffrequest.model';
import { TimeOffModel } from './timeoff.model';
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

export class ScheduleCollection<E extends Schedule, M extends ScheduleModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}