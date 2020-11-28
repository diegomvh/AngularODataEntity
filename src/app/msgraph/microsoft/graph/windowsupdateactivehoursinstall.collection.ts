import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
import { WindowsUpdateActiveHoursInstall } from './windowsupdateactivehoursinstall.entity';
import { WindowsUpdateActiveHoursInstallModel } from './windowsupdateactivehoursinstall.model';
//#endregion

export class WindowsUpdateActiveHoursInstallCollection<E extends WindowsUpdateActiveHoursInstall, M extends WindowsUpdateActiveHoursInstallModel<E>> extends WindowsUpdateInstallScheduleTypeCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}