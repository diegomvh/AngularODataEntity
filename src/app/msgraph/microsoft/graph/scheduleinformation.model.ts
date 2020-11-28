import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.complex';
import { FreeBusyError } from './freebusyerror.complex';
import { ScheduleInformation } from './scheduleinformation.complex';
import { ScheduleItem } from './scheduleitem.complex';
import { WorkingHoursModel } from './workinghours.model';
import { FreeBusyErrorModel } from './freebusyerror.model';
import { ScheduleItemModel } from './scheduleitem.model';
import { WorkingHoursCollection } from './workinghours.collection';
import { FreeBusyErrorCollection } from './freebusyerror.collection';
import { ScheduleInformationCollection } from './scheduleinformation.collection';
import { ScheduleItemCollection } from './scheduleitem.collection';
//#endregion

export class ScheduleInformationModel<E extends ScheduleInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  availabilityView?: string;
  error?: FreeBusyErrorModel<FreeBusyError>;
  scheduleId?: string;
  scheduleItems?: ScheduleItemCollection<ScheduleItem, ScheduleItemModel<ScheduleItem>>;
  workingHours?: WorkingHoursModel<WorkingHours>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}