import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateActiveHoursInstall } from './windowsupdateactivehoursinstall.complex';
import { WindowsUpdateActiveHoursInstallCollection } from './windowsupdateactivehoursinstall.collection';
//#endregion

export class WindowsUpdateActiveHoursInstallModel<E extends WindowsUpdateActiveHoursInstall> extends WindowsUpdateInstallScheduleTypeModel<E> {
  //#region ODataApi Properties
  activeHoursEnd: Date;
  activeHoursStart: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}