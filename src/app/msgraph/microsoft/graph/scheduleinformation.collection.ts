import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { ScheduleInformationModel } from './scheduleinformation.model';
import { ScheduleItemModel } from './scheduleitem.model';
import { WorkingHoursCollection } from './workinghours.collection';
import { FreeBusyErrorCollection } from './freebusyerror.collection';
import { ScheduleItemCollection } from './scheduleitem.collection';
//#endregion

export class ScheduleInformationCollection<E extends ScheduleInformation, M extends ScheduleInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}