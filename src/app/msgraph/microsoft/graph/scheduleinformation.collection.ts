import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.entity';
import { FreeBusyError } from './freebusyerror.entity';
import { ScheduleInformation } from './scheduleinformation.entity';
import { ScheduleItem } from './scheduleitem.entity';
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