import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WeeklySchedule } from './weeklyschedule.enum';
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.complex';
import { WindowsUpdateScheduledInstallCollection } from './windowsupdatescheduledinstall.collection';
//#endregion

export class WindowsUpdateScheduledInstallModel<E extends WindowsUpdateScheduledInstall> extends WindowsUpdateInstallScheduleTypeModel<E> {
  //#region ODataApi Properties
  scheduledInstallDay: WeeklySchedule;
  scheduledInstallTime: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}