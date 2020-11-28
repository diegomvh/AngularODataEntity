import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
import { WeeklySchedule } from './weeklyschedule.enum';
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.entity';
import { WindowsUpdateScheduledInstallModel } from './windowsupdatescheduledinstall.model';
//#endregion

export class WindowsUpdateScheduledInstallCollection<E extends WindowsUpdateScheduledInstall, M extends WindowsUpdateScheduledInstallModel<E>> extends WindowsUpdateInstallScheduleTypeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}